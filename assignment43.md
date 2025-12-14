```js
import React from "react";

// Root Component
export default function HTMLTopicsDemo() {
  return (
    <div className="p-6 space-y-8 text-gray-900">
      <BlockVsInline />
      <SemanticTags />
      <FormattingTags />
      <InteractiveTags />
      <FormsDemo />
      <TablesAndLists />
      <IframeDemo />
    </div>
  );
}

// 1. Block vs Inline Elements
function BlockVsInline() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">1. Block-level vs Inline Elements</h2>

      <div className="space-y-2">
        <p className="font-semibold">Block-level Elements</p>
        <div className="border p-4 bg-gray-100">
          This is a div (block element)
        </div>
        <p className="bg-blue-100 p-2">This is a p tag (block element)</p>
      </div>

      <div className="space-y-2">
        <p className="font-semibold">Inline Elements</p>
        <p>
          This is <span className="text-red-500">span</span> inside text.
        </p>
        <p>
          Inline text with <b>bold</b>, <i>italic</i>, and <u>underline</u>.
        </p>
      </div>
    </section>
  );
}

// 2. Semantic Tags
function SemanticTags() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">2. Semantic HTML Tags</h2>

      <header className="p-4 bg-gray-200">Header Section</header>
      <nav className="p-3 bg-gray-100">Navigation Bar</nav>
      <main className="p-4 bg-gray-50">Main Content Area</main>
      <section className="p-4 bg-gray-100">Section Area</section>
      <article className="p-4 bg-gray-200">Article Content</article>
      <aside className="p-4 bg-gray-100">Aside Widgets</aside>
      <footer className="p-4 bg-gray-200">Footer Area</footer>
    </section>
  );
}

// 3. Formatting Tags
function FormattingTags() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">3. Formatting Tags</h2>
      <p>
        <b>Bold Text</b>
      </p>
      <p>
        <strong>Strong (important) Text</strong>
      </p>
      <p>
        <i>Italic Text</i>
      </p>
      <p>
        <em>Emphasized Text</em>
      </p>
      <p>
        <u>Underlined Text</u>
      </p>
      <p>
        <mark>Highlighted Text</mark>
      </p>
      <p>
        <small>Small text description</small>
      </p>
    </section>
  );
}

// 4. Interactive Tags
function InteractiveTags() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">4. Interactive Tags</h2>

      <a className="text-blue-600 underline" href="#">
        Click Me (Link)
      </a>

      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Click Button
        </button>
      </div>

      <input className="border p-2" type="text" placeholder="Enter text" />

      <textarea
        className="border p-2 w-full"
        placeholder="Type something..."
      ></textarea>
    </section>
  );
}

// 5. Forms Demo
function FormsDemo() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">
        5. Forms (Input Types, Labels, Required, Validation)
      </h2>

      <form className="space-y-3">
        <div>
          <label>Email: </label>
          <input
            className="border p-2"
            type="email"
            required
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            className="border p-2"
            type="password"
            required
            placeholder="Enter password"
          />
        </div>

        <div>
          <label>Age: </label>
          <input className="border p-2" type="number" min="1" max="100" />
        </div>

        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Submit
        </button>
      </form>
    </section>
  );
}

// 6. Tables & Lists
function TablesAndLists() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">6. Tables & Lists</h2>

      <h3 className="font-semibold">Unordered List</h3>
      <ul className="list-disc ml-6">
        <li>Apple</li>
        <li>Banana</li>
        <li>Orange</li>
      </ul>

      <h3 className="font-semibold">Ordered List</h3>
      <ol className="list-decimal ml-6">
        <li>Step 1</li>
        <li>Step 2</li>
        <li>Step 3</li>
      </ol>

      <h3 className="font-semibold">Table Example</h3>
      <table className="border collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Ramesh</td>
            <td className="border p-2">22</td>
          </tr>
          <tr>
            <td className="border p-2">Suresh</td>
            <td className="border p-2">25</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

// 7. Iframe Demo
function IframeDemo() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">7. Iframe & Embeds</h2>

      <iframe
        className="w-full h-64 border"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="YouTube Video"
      ></iframe>
    </section>
  );
}
```
