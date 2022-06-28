import moment from "moment";
import { Repo } from "../types/Repo";
import { TrendingRepo } from "../types/TrendingRepo";

// get the date
const getDate = (date: string) => {
    if (date === undefined)
      return moment().subtract(30, 'days').format('YYYY-MM-DD');
    return moment(date).subtract(30, 'days').format('YYYY-MM-DD');
  };
  
const getTrendingRepos = (languages: string[], repos: Repo[]) => {
    var trendingRepos = [];
    var sameLanguageRepos = [];
    for (let i = 0; i < languages.length; i++) {
        var sameLanguageRepo = [];

        for (let j = 0; j < repos.length; j++) {
            if (repos[j].language === languages[i]) sameLanguageRepo.push(repos[j].name);
        }

        sameLanguageRepos.push(sameLanguageRepo);

        var trendingRepo: TrendingRepo = {
            language: languages[i],
            numberOfRepos: sameLanguageRepos[i].length,
            repos: sameLanguageRepos[i],
        };
        trendingRepos.push(trendingRepo);
    }

    return { total: repos.length, trendingRepos };
};

const pushNonNullRepos = (obj: any, repos: Repo[]) => {
    if (repos.length != 0) return;
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].language != null) {
        let repo = {
            name: obj[i].name,
            language: obj[i].language,
        };
        repos.push(repo);
        }
    }
};

export {
    getDate,
    getTrendingRepos,
    pushNonNullRepos,
}