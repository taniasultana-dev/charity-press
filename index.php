<?php  
    // document open
    include './partials/document-open.php'; 
?>

<section class="banner banner--demo">
    <div class="overlay">
        <div class="container text-center text-white">
            <picture>
                <img width="166" height="88" loading="lazy" class="banner__img" src="./images/logos/logo.webp" alt="site-logo">
            </picture>
            <h1 class="banner__title">CharityPress</h1>
            <p class="banner__description">CharityPress - Charity Fundraising HTML Template</p>
            <div class="banner__group-btn">
                <a class="banner__primary-btn" href="#"><span>buy theme</span></a>  
                <a class="banner__secondary-btn" href="#">
                    <span>demos</span>
                </a>  
            </div>
        </div>
    </div>
</section>

<section class="demo-section">
    <div class="container">
        <div class="section-heading section-heading--center">
            <h2 class="section-heading__title">3 Unique Demos</h2>
            <p class="section-heading__subtitle">CHOOSE YOUR LAYOUT</p>
        </div>
        <div class="row gy-3 demo-section__preview-container">
            <div class="col-sm-6 col-md-4">
                <div class="demo-section__card">
                    <picture>
                        <img class="w-100 h-auto" width="310" height="470" loading="lazy" src="./images/common/demo_1.webp" alt="demo-preview">
                    </picture>
                    <div class="btn-holder">
                        <a href="home-1.php"><span>Index Version 1</span></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="demo-section__card">
                    <picture>
                        <img class="w-100 h-auto" width="310" height="470" loading="lazy" src="./images/common/demo_1.webp" alt="demo-preview">
                    </picture>
                    <div class="btn-holder">
                        <a href="#"><span>Index Version 2</span></a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-4">
                <div class="demo-section__card">
                    <picture>
                        <img class="w-100 h-auto" width="310" height="470" loading="lazy" src="./images/common/demo_1.webp" alt="demo-preview">
                    </picture>
                    <div class="btn-holder">
                        <a href="#"><span>Index Version 3</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<?php include './partials/document.close.php' ?>