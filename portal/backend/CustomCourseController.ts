
import {CourseController} from "@backend/controllers/CourseController";
import {IGitHubController} from "@backend/controllers/GitHubController";
import {Deliverable, Person} from "@backend/Types";
import Log from "@common/Log";
export class CustomCourseController extends CourseController {

    constructor(ghController: IGitHubController) {
        Log.trace("CustomCourseController::<init>");
        super(ghController);
    }

}
