import { createContext, useEffect, useState } from "react";
import {
  IChildren,
  GithubUserDataType,
  IssuesDataType,
} from "../utils/interface";
import { api } from "../lib/api";

interface GithubUserContextType {
  userData: GithubUserDataType | null;
  issuesData: IssuesDataType[];
  singleIssueData: IssuesDataType | null;
  searchForIssues: (
    username: string,
    repo: string,
    query: string
  ) => Promise<void>;
  getIssue: (
    issueNumber: number,
    username: string,
    repo: string
  ) => Promise<void>;
}

export const GithubUserContext = createContext({} as GithubUserContextType);

export function GithubUserProvider({ children }: IChildren) {
  const [userData, setUserData] = useState<GithubUserDataType | null>(null);
  const [issuesData, setIssuesData] = useState<IssuesDataType[]>([]);
  const [singleIssueData, setSingleIssueData] = useState(null);

  async function getUserData(username: string) {
    const url = `/users/${username}`;
    const response = await api.get(url);

    setUserData(response.data);
  }

  async function getUserRepoIssues(username: string, repo: string) {
    const url = `/repos/${username}/${repo}/issues`;
    const response = await api.get(url);

    console.log(issuesData);
    setIssuesData(response.data);
  }

  async function searchForIssues(
    username: string,
    repo: string,
    query: string
  ) {
    const url = `/search/issues?q=${query}%20repo:${username}/${repo}`;
    const response = await api.get(url);

    setIssuesData(response.data.items);
  }

  async function getIssue(issueNumber: number, username: string, repo: string) {
    const url = `/repos/${username}/${repo}/issues/${issueNumber}`;
    const response = await api.get(url);

    setSingleIssueData(response.data);
  }

  useEffect(() => {
    getUserData("RafaelR4mos");
    getUserRepoIssues("RafaelR4mos", "ignite-github-blog");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GithubUserContext.Provider
      value={{
        userData,
        issuesData,
        singleIssueData,
        searchForIssues,
        getIssue,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}
