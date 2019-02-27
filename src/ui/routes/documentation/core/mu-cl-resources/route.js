import Route from '@ember/routing/route';
import fetch from 'fetch';
import readmeUrl from 'mu-semtech/src/utils/github-readme-url';

export default class DocumentationCoreMuClResourcesRoute extends Route {
  async model(){
    const url = readmeUrl("mu-semtech/mu-cl-resources");
    const response = await fetch(url);
    return response.text();
  }
}
