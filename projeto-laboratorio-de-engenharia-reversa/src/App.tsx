/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MainLayout } from "./components/layout/MainLayout";

export default function App() {
  return (
    <MainLayout 
      preview={
        <div className="p-8 prose prose-slate max-w-none">
          <h1 className="text-3xl font-bold mb-4">Live Preview</h1>
          <p className="text-gray-600">This is where the formatted markdown will appear.</p>
        </div>
      }
    >
      <div className="p-8 h-full">
        <textarea 
          className="w-full h-full resize-none outline-none font-mono text-lg leading-relaxed"
          placeholder="Start writing markdown here..."
          defaultValue="# Welcome to StackEdit Clone\n\nThis is a faithful clone of the StackEdit.io markdown editor."
        />
      </div>
    </MainLayout>
  );
}
