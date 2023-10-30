import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface GithubUserDataType {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null;
  created_at: string;
  email: null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  location: string;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: null;
  type: string;
  updated_at: string;
  url: string;
}

//issuesData
export interface IssuesDataType {
  active_lock_reason: null;
  assignee: null;
  assignees: [];
  author_association: string;
  body: string;
  closed_at: null;
  comments: number;
  comments_url: string;
  created_at: string;
  events_url: string;
  html_url: string;
  id: number;
  labels: [];
  labels_url: string;
  locked: boolean;
  milestone: null;
  node_id: string;
  number: number;
  performed_via_github_app: null;
  reactions: Reactions;
  repository_url: string;
  state: string;
  state_reason: null;
  timeline_url: string;
  title: string;
  updated_at: string;
  url: string;
  user: User;
}

export interface Reactions {
  "+1": number;
  "-1": number;
  confused: number;
  eyes: number;
  heart: number;
  hooray: number;
  laugh: number;
  rocket: number;
  total_count: number;
  url: string;
}

export interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}
