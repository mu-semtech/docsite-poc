import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import fetch from 'fetch';
import readmeUrl from 'mu-semtech/src/utils/github-readme-url';

export default class DocumentationCoreFromRepositoryRoute extends Route {
  async model({repository}){
    const url = readmeUrl(`mu-semtech/${repository}`);
    const response = await fetch(url);
    const markdown = await response.text();
    return new EmberObject({ markdown, repository });
  }
}
