import React from 'react';
import MainLayout from "layouts/MainLayout";
import MenuBar from "components/MenuBar";

const EachUserProfile = () => {
    return (
        <MainLayout routeInfo='Home'>
            <MenuBar routeInfo='Home'/>
        </MainLayout>
    );
}

export default EachUserProfile;