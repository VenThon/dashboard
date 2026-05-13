This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Config with next-intl nextjs app router with i18n routing

```bash
npm install next-intl
```

[Now, we’re going to create the following file structure]()

```bash
├── messages
│   ├── en.json
│   └── ...
├── next.config.ts
└── src
    ├── i18n
    │   ├── routing.ts
    │   ├── navigation.ts
    │   └── request.ts
    ├── middleware.ts
    └── app
        └── [locale]
            ├── layout.tsx
            └── page.tsx

```

## authentication using lucia auth with nextjs

[Reference lucia auth](https://lucia-auth.com/)

## Phone number field

How can I make a phone number field that lets users select other countries, showing the country flag and calling code (for example, Cambodia 🇰🇭 +855)?

```bash
npm install react-phone-number-input
```

After installing the library, we created a phone number input component with the default country set to KH and used it in the phone number field of the create form.
