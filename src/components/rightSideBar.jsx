function RightSideBar() {
    return (
        <>
            <aside className="rightSideBar">
                <input type="search" className="search" placeholder="search Twitter" />
                <div className="trends">
                    <div className="upText">Trends for you</div>
                    <div className="trends__posts"></div>
                </div>
            </aside>
        </>
    )
}
export default RightSideBar