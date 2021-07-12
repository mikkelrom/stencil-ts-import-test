import {Component, h, Prop} from '@stencil/core';
import {format} from '../../utils/utils';
import {User} from "../../../../models/User";

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  getUser(user: User) {
    return user;
  }

  private getText(): string {
    console.log(this.getUser({firstName: this.first, lastName: this.last, age: 100}))
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
