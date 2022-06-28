import axios from "axios";
import { Request, Response } from "express";
import { Repo } from "../types/Repo";
import { getDate, getTrendingRepos, pushNonNullRepos } from "../utils/utils";

export const getRepos = (request: Request, response: Response) => {
    const date = getDate(request.params.date);
    const url = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&per_page=100`;
    // emptying the repos and languages array before each request.
    var repos: Repo[] = [];
    var languages: string[] = [];
  
    axios
      .get(url)
      .then((res) => {
        pushNonNullRepos(res.data.items, repos); // push only the repos where the language is not null
  
        for (let i = 0; i < repos.length; i++) languages.push(repos[i].language);
        languages = [...new Set(languages)]; // remove dupplicates
        response.json(getTrendingRepos(languages, repos));
      })
      .catch((err) => {
        response.send(err);
      });
  };