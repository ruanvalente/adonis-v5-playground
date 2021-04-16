// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  async index() {
    return {
      id: 1,
      title: 'Title post',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod architecto ut beatae rerum voluptatem, iusto quae sapiente mollitia quibusdam. Beatae maxime expedita repellat ea perferendis animi soluta dolor commodi rem?

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus eveniet nemo numquam qui dolore nam? Ut fuga illum deleniti nesciunt, quibusdam maiores expedita. Id ipsum dolores cupiditate corrupti minima deserunt.

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate commodi ad expedita cumque nulla accusantium quibusdam corrupti, assumenda explicabo id veniam molestiae, eos nemo ex deleniti laborum! Doloribus, voluptatibus cupiditate.`
    }
  }
}
