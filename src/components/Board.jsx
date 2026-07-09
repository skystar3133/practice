import React, { useState } from 'react'
import './Board.css'

function Board() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Welcome to our new platform', author: 'Admin', date: '2024-07-09', views: 1240 },
    { id: 2, title: 'How to get started with React', author: 'John Doe', date: '2024-07-08', views: 856 },
    { id: 3, title: 'Best practices for Vite projects', author: 'Jane Smith', date: '2024-07-07', views: 723 },
    { id: 4, title: 'Understanding component lifecycle', author: 'Mike Johnson', date: '2024-07-06', views: 521 },
    { id: 5, title: 'Tips and tricks for web development', author: 'Sarah Wilson', date: '2024-07-05', views: 434 },
  ])

  return (
    <section className="board-section">
      <div className="board-container">
        <div className="board-header">
          <h2 className="board-title">게시판</h2>
          <button className="btn-write">글쓰기</button>
        </div>

        <div className="board-table-wrapper">
          <table className="board-table">
            <thead>
              <tr>
                <th className="col-num">번호</th>
                <th className="col-title">제목</th>
                <th className="col-author">작성자</th>
                <th className="col-date">날짜</th>
                <th className="col-views">조회</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="board-row">
                  <td className="col-num">{post.id}</td>
                  <td className="col-title">
                    <a href="#" className="post-link">{post.title}</a>
                  </td>
                  <td className="col-author">{post.author}</td>
                  <td className="col-date">{post.date}</td>
                  <td className="col-views">{post.views}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="board-pagination">
          <button className="pagination-btn">이전</button>
          <span className="pagination-info">1 / 10</span>
          <button className="pagination-btn">다음</button>
        </div>
      </div>
    </section>
  )
}

export default Board
