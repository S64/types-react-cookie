# @types/react-cookie

TypeScript definitions for [react-cookie](https://github.com/reactivestack/cookies/tree/master/packages/react-cookie).

## Installation

```javascript
{
  "dependencies": {
    "universal-cookie": "^2.1.2",
    "universal-cookie-express": "^2.1.2",
    "react-cookie": "^2.1.2"
  },
  "devDependencies": {
    "@types/universal-cookie": "git+ssh://git@github.com:S64/types-universal-cookie.git#v2.1.2-1",
    "@types/universal-cookie-express": "git+ssh://git@github.com:S64/types-universal-cookie-express.git#v2.1.2-1",
    "@types/react-cookie": "git+ssh://git@github.com:S64/types-react-cookie.git#v2.1.2-1"
  }
}
```

## SSR Example

```typescript
import { withCookies, CookieComponentProps } from 'react-cookie';

interface Props extends CookieComponentProps {}

class App extends React.Component<Props> {

  render() {
    return (
      <div>{this.props.cookies!.get<string>('myCat')}</div>
    )
  }

}

export default withCookies(App);
```

```typescript
import { UniversalCookieRequest } from 'universal-cookie-express';
import { CookiesProvider } from 'react-cookie';

app.use((req: Request & UniversalCookieRequest, res: Response) => {
  const markup = ReactDOMServer.renderToString(
    <CookiesProvider cookies={req.universalCookies}>
      <App/>
    </CookiesProvider>
  );
  // do something...
});
```
