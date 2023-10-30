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
}

export const GithubUserContext = createContext({} as GithubUserContextType);

export function GithubUserProvider({ children }: IChildren) {
  const [userData, setUserData] = useState<GithubUserDataType | null>(null);
  const [issuesData, setIssuesData] = useState<IssuesDataType[]>([]);

  async function getUserData(username: string) {
    const url = `/users/${username}`;
    const response = await api.get(url);

    setUserData(response.data);
  }

  async function getUserRepoIssue(username: string, repo: string) {
    const url = `/repos/${username}/${repo}/issues`;
    const response = await api.get(url);

    console.log(issuesData);
    setIssuesData(response.data);
  }

  useEffect(() => {
    getUserData("RafaelR4mos");
    getUserRepoIssue("RafaelR4mos", "ignite-github-blog");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GithubUserContext.Provider value={{ userData, issuesData }}>
      {children}
    </GithubUserContext.Provider>
  );
}
