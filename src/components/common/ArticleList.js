import React from "react";
import "./ArticleList.scss";

function Article({ title, url, date }) {
  return (
    <tr className="article">
      <td width="70%">
        <a href={url}>{title}</a>
      </td>
      <td width="30%">{date}</td>
    </tr>
  );
}
function ArticleList({ articles }) {
  return (
    <div className="ArticleList">
      <div className="articles">
        <table>
          <tbody>
            {articles.map((row, key) => (
              <Article
                key={key}
                title={row.title}
                url={row.url}
                date={row.date}
              ></Article>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ArticleList;
