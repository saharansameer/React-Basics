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
        console.log(data)
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
                const dbPost = await dbService.createPost({...data, userId: userData.$id});
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
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">
            <Input
            label="Title :"
            placeholder="Title"
            className="mb-4"
            {...register("title", { required: true })}
            />
            <Input
            label="Slug :"
            placeholder="Slug"
            className="mb-4"
            {...register("slug", { required: true })}
            onInput={(e) => {
                setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
            }}
            />
            <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
        </div>
        <div className="w-1/3 px-2">
            <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
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
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
            <Button text={post ? "Update" : "Submit"} type="submit" className="w-full" />
        </div>
    </form>
  );
}

export default PostForm;
