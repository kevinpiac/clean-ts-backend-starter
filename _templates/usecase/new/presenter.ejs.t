---
to: src/Business/<%= Domain %>/Usecases/<%= Name %>/<%= Name %>Presenter.ts/
---
import { <%= Name %>Response } from "./<%= Name %>Response";

export interface <%= Name %>Presenter {
    present(<%= name %>Response: <%= Name %>Response): any;
}
