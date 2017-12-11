import * as React from 'react';
import Cookies from 'universal-cookie';

export interface CookieComponentProps {
  cookies?: Cookies
}

export default class CookieProvider extends React.Component<CookieComponentProps> {}
