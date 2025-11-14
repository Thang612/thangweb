// src/app/admin/blog/create/RichTextEditorClient.tsx
'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export type RichTextEditorHandle = {
  getContent: () => string;
};

const RichTextEditorClient = forwardRef<RichTextEditorHandle, {}>((_, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
            ['clean'],
          ],
        },
        placeholder: 'Write something...',
      });
    }

    return () => {
      quillRef.current = null;
    };
  }, []);

  useImperativeHandle(ref, () => ({
    getContent: () => quillRef.current?.root.innerHTML || '',
  }));

  return <div ref={editorRef} className="border rounded p-2" style={{ height: 300 }} />;
});

RichTextEditorClient.displayName = 'RichTextEditorClient';
export default RichTextEditorClient;
