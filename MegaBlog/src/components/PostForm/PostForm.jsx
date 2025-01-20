import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import dbService from "../../appwrite/db_config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({post}) {
    const { register, handleSubmit, watch, setValue, control, getValues } =
        useForm({
            defaultValues: {
                title: post?.title || "",
                slug: post?.slug || "",
                content: post?.content || "",
                status: post?.status || "active",
            }
        });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    
    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await dbService.uploadFile(data.image[0]) : null;
            if (file) dbService.deleteFile(post.featuredImage);

            const dbPost = await dbService.updatePost(post.$id, {...data, featuredImage: file ? file.id : undefined});
            if (dbPost) navigate(`/posts/${dbPost.$id}`); 

        } else {
            const file = await dbService.uploadFile(data.image[0]);
            console.log(file)
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await dbService.createPost({...data, userId: userData.$id, userName: userData.name});
                if (dbPost) navigate(`/posts/${dbPost.$id}`);
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value == 'string') {
            return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, '')
            .replace(/\s+/g, '-');;
        };
        return '';
    }, []);

    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if (name === 'title' && value.title) {
                setValue('slug', slugTransform(value.title), {shouldValidate: true});
            }
        });

        return () => {
            subscription.unsubscribe();
        }
    }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-5">
        <div className="w-full px-2">
            <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
            />
            <Input
            label="Custom URL :"
            placeholder="/"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-full px-2">
            <Input
            label="Featured Image :"
            type="file"
            className="mb-4 text-sm"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
            />
            {post && (
                <div className="w-full mb-4">
                    <img
                    src={dbService.getFilePreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-lg"
                    />
                </div>
            )}
            <Select
                options={["active", "inactive"]}
                label={{text: "Status : ", style: "font-semibold dark:text-white"}}
                className="w-24 sm:w-28 px-2 py-1 mb-5 rounded-lg"
                {...register("status", { required: true })}
            />
            <Button text={post ? "Update" : "Submit"} type="submit" className={'w-1/3 px-2 py-1 rounded-md'} />
        </div>
    </form>
  );
}

export default PostForm;
