import {externalLinkWelcome, mainLinksSelectors} from "../Selectors/MainSelectors";
import {checkExternalLink} from "../Functions/ExternalLinksFunction";

export class ExternalLinks {
    static goToExternalLinks (): void {
        externalLinkWelcome.forEach(link =>
             checkExternalLink({
                 selector: mainLinksSelectors.mainPageLinks,
                 childIndex: 0,
                 htmlTag: 'a',
                 index: link.index,
                 containWord: link.text
             })
        );
    }
}