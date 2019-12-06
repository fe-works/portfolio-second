<template>
    <div id="bottom-footer">
        <div id="text">
            <h3>(C) 2019- Fe-chan All Rights Reserved.</h3>
            <p>本Webページでは「Google Analytics」を使用しています。</p>
        </div>
    </div>
</template>

<style scoped>

#bottom-footer {
    width:100vw;
    height:25px;
    background-color:#EEF1F2;   

    /*position: absolute;
	bottom: 0; */

}

#text {
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
}
#text h3,
#text p {
    margin:2.5px 10px;
    padding:0;
    color:#707070;
    font-size:12px;
    font-weight:normal;
}

@media screen and (max-width:750px) {
    #bottom-footer {
        height:auto;
    }
}

</style>
