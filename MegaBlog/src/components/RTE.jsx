import React from 'react';
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import config from "../config/config.js";

function RTE({name, control, label, defaultValue = ""}) {

  return (
    <div className='w-full'>
      {label && <label className='inline-block dark:text-white font-semibold'>{label}</label>}
      <Controller 
      name={name || "no name"}
      control={control}
      render={({field: {onChange}}) => (
        <Editor
        apiKey={config.tinyApiKey}
        key={defaultValue}
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            mobile: {
              menubar: false,
              plugins: 'autosave lists autolink',
              toolbar: 'undo bold italic styles',
            },
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
      )}
      />
    </div>
  )
}

export default RTE