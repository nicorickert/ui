# @nicorickert/ui-library

Accesible, tested and kind of beautiful components library for React applications, leveraging [Shadcn components](https://ui.shadcn.com/).

## Installation

```bash
npm install @nicorickert/ui-library
pnpm add @nicorickert/ui-library
yarn add @nicorickert/ui-library
```

## Usage

[Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) is supported, so you can import only the components you need, and keep the rest out of your bundle.
To use the styles of the components, you need to import the `@nicorickert/ui-library/dist/styles.css` file in your root file.

```jsx
import React from 'react'

import { Button } from '@nicorickert/ui-library'
import '@nicorickert/ui-library/dist/styles.css'

const App = () => {
    return <Button>Click me</Button>
}
```

## Development

Using [Storybook](https://storybook.js.org/) to develop and test components in isolation.

```bash
npm run storybook
```

## Testing

Powered by [Vitest](https://vitest.dev/) and [Testing Library](https://testing-library.com/).

```bash
npm run test
```

## License

Licensed under the MIT License. See [LICENSE](LICENSE) for more information.
