import {externalLinkWelcome, mainLinksSelectors} from "../Selectors/MainSelectors";
import {checkExternalLink, useFindFunction} from "../Functions/ExternalLinksFunction";

export class ExternalLinks {
    static goToExternalLinks (): void {
        externalLinkWelcome.forEach(link =>
             checkExternalLink(useFindFunction,{
                 selector: mainLinksSelectors.mainPageLinks,
                 childIndex: 0,
                 htmlTag: 'a',
                 index: link.index,
                 containWord: link.text
             })
        );
    }
}