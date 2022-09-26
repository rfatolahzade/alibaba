# Alibaba task

Countries list and detail Country implementation

## Installation

Install project with npm or yarn

```bash
  yarn dev
  #or
  npm run dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_PATH`
./

`NEXT_PUBLIC_BUILD_ENV`
'development'

`NEXT_PUBLIC_REACT_APP_BASE_URL_API`
'https://restcountries.com/'

## Tech Stack

**Client:** React, Redux, Scss, Styled Components,Nextjs, Axios

## Usage/Examples

1-Add new icon

-Your new icon upload https://icomoon.io/

-Use the font icon in the path 'assets/fonts/icomoon'

-Add new icon in file 'ui-kit/icons/icon'

```javascript
  [name-icon]: <span className={`${iconPretext}[name-icon]`} />,
```

2-Change color dark mode
'assets/styles/globals.scss'

```css
[data-theme='dark'] {
  --color-primary: var(--white);
  --color-background: var(--blue-dark-500);
  --color-background-secondary: var(--blue-dark);
}
```

3-Use card country

```javascript
<CardCountry data={listItem} />
```

4-Use palettes color

```css
$palettes: (
  [color-name]: (
    100: #fafafa,
    200: #fcfcfc,
    '': #ffffff
  )
);
```

```javascript
<h4 className='text-[color-name]-[color-code]'></h4>
```

## API Reference

#### Get all countries

```http
  GET v2/all
```

#### Get detail country by code

```http
  GET v2/alpha/${alpha3Code}
```

| Parameter    | Type     | Description                               |
| :----------- | :------- | :---------------------------------------- |
| `alpha3Code` | `number` | **Required**. Alpha3Code of item to fetch |

## Deployment

To deploy this project run

```bash
  npm run build
  #or
  yarn build
```

After finish build

```bash
  npm run start
  #or
  yarn start
```

## Feedback

If you have any feedback, please reach out to us at mohsen.noury@gmail.com
