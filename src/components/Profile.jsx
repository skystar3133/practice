import React from 'react'
import './Profile.css'

function Profile() {
  return (
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar">
            <span className="avatar-initials">HGD</span>
          </div>

          <div className="profile-info">
            <h3 className="profile-name">홍길동</h3>

            <div className="profile-detail">
              <span className="detail-label">전화</span>
              <span className="detail-value">010-1234-5678</span>
            </div>

            <div className="profile-detail">
              <span className="detail-label">이메일</span>
              <span className="detail-value">abcd@abcd.com</span>
            </div>
          </div>

          <button className="btn-contact">연락하기</button>
        </div>
      </div>
    </section>
  )
}

export default Profile
