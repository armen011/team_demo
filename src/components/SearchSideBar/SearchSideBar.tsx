import React from 'react';
import userIcon from "../../images/user.png";
import './SearchSideBar.css'

const  SearchSideBar = () => {
    return (
        <div className={'search-part'}>
            <div className={'search-upper-part'}>
                <div className={'search-section'}>Search</div>
                <div className={'search-input-part'}>
                    <input type="text" placeholder={'Search'}/>
                </div>
            </div>

            <div className={'search-main-part'}>
                <div className={'search-instruction-part'}>
                    <span style={{fontSize:'14px'}}>Recent</span>
                    <span className={'clear-searches-button'}>Clear all</span>
                </div>

                <div className={'search-singleUser-part'}>
                    <div className={'single-search-user'}>
                        <div className={'single-search-icon-part'}>
                            <img src={userIcon} alt="userIcon"/>
                        </div>
                        <div className={'single-search-text-part'}>
                            <div>username</div>
                            <div>bio about username</div>
                        </div>
                        <div className={'single-search-delete-part'}>
                            <span>&#10005;</span>
                        </div>
                    </div>

                    <div className={'single-search-user'}>
                        <div className={'single-search-icon-part'}>
                            <img src={userIcon} alt="userIcon"/>
                        </div>
                        <div className={'single-search-text-part'}>
                            <div>username</div>
                            <div>bio about username</div>
                        </div>
                        <div className={'single-search-delete-part'}>
                            <span>&#10005;</span>
                        </div>
                    </div>

                    <div className={'single-search-user'}>
                        <div className={'single-search-icon-part'}>
                            <img src={userIcon} alt="userIcon"/>
                        </div>
                        <div className={'single-search-text-part'}>
                            <div>username</div>
                            <div>bio about username</div>
                        </div>
                        <div className={'single-search-delete-part'}>
                            <span>&#10005;</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchSideBar;