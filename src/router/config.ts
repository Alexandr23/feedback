import { FeedbackPage } from "../pages/feedback-page";
import { RouterConfig } from "./types/config";

export const ROUTER_CONFIG: RouterConfig = [{ path: "/", name: "Feedback Page", exact: true, component: FeedbackPage }];
