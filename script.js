// Dữ liệu nhà tài trợ - giữ nguyên hoàn toàn của bạn
const sponsors = [
    {
name:"NGHIEM SY HOANG",
type:"personal",
amount:"200K",
msg:"",
icon:"fas fa-user"
},
{
name:"BUI QUOC HOAN",
type:"personal",
amount:"300K",
msg:"",
icon:"fas fa-user"
},
{
name:"NGUYEN VAN PHUONG - Công ty Minh Tâm ITS",
type:"company",
amount:"1000K",
msg:"",
avatar:"images/cong-ty-minh-tam.png",
link: "https://minhtamits.com/"
},
{
name:"PHAM NGOC TRUNG",
type:"personal",
amount:"200K",
msg:"",
icon:"fas fa-user"
},
{
name:"NGUYEN TRAN THANH",
type:"personal",
amount:"500K",
msg:"Thằng bạn học chung lớp cấp 4 ngày xưa",
icon:"fas fa-user"
},
{
name:"HUYNH NGOC TRON",
type:"personal",
amount:"500K",
msg:"",
icon:"fas fa-user"
},
{
name:"VO MINH TU",
type:"personal",
amount:"100K",
msg:"",
icon:"fas fa-user"
},
{
name:"DOAN MINH DUC",
type:"personal",
amount:"500K",
msg:"",
icon:"fas fa-user"
},
{
name:"PHAM NGOC THACH - Mekong Solution",
type:"company",
amount:"499K",
msg:"CÔNG TY TNHH DỊCH VỤ GIẢI PHÁP MÊ KÔNG (Mekong Solution – MKSOL)",
avatar:"images/myworkspace-vn-logo-moi.png",
link: "https://myworkspace.vn/"
},
{
name:"NGUYEN MINH VUONG",
type:"personal",
amount:"499999K",
msg:"Trang web có nhiều cảnh đẹp và món ăn ngon",
avatar:"images/logo_vibe.png"
},
{
name:"PHAM NGOC TRUNG",
type:"personal",
amount:"300K",
msg:"",
icon:"fas fa-user"
},
{
name:"VO MINH HIEU",
type:"personal",
amount:"100K",
msg:"",
icon:"fas fa-user"
},
{
name:"LE BAC NAM - Công ty Công Nghệ 44+",
type:"company",
amount:"4444444K",
msg:"",
avatar:"images/44plus-vn-logo.png",
link: "https://44plus.vn/"
},
{
name:"NGUYEN QUANG HOANG",
type:"personal",
amount:"1000K",
msg:"",
icon:"fas fa-user"
},
{
name:"Nhà tài trợ ẩn danh",
type:"personal",
amount:"500K",
msg:"",
avatar:"images/hsyt-vn-logo.png"
},
{
name:"MA KHANH SON",
type:"personal",
amount:"200K",
msg:"",
icon:"fas fa-user"
},
{
name:"DUONG THIEN HUU",
type:"personal",
amount:"100K",
msg:"https://www.kotomari-vn.dev",
icon:"fas fa-user"
},
{
name:"NGUYEN ANH KIET",
type:"personal",
amount:"100K",
msg:"",
avatar:"/images/npackr-com-logo-1024x1024.png"
},
{
name:"DANG NGUYEN HONG KHA",
type:"personal",
amount:"100K",
msg:"",
icon:"fas fa-user"
},
{
name:"Nhà tài trợ ẩn danh",
type:"personal",
amount:"500K",
msg:"",
avatar:"images/maichiparser-com-logo-moi.png"
},
{
name:"Nhà tài trợ ẩn danh",
type:"personal",
amount:"200K",
msg:"",
icon:"fas fa-user-secret"
},
{
name:"NGUYEN HOANG CONG",
type:"personal",
amount:"100K",
msg:"",
icon:"fas fa-user"
},
{
name:"NGUYEN CHI HIEU",
type:"personal",
amount:"200K",
msg:"",
icon:"fas fa-user"
},
{
name:"DO HUY THAO",
type:"personal",
amount:"500K",
msg:"",
icon:"fas fa-user"
},
{
name:"DINH NGOC DUNG",
type:"personal",
amount:"200K",
msg:"",
icon:"fas fa-user"
},
{
name:"NGUYEN KHA MINH",
type:"personal",
amount:"100K",
msg:"https://mnlifeblog.com",
icon:"fas fa-user"
},
{
name:"LE MINH TRIEU",
type:"personal",
amount:"100K",
msg:"",
icon:"fas fa-user"
},
{
name:"LE KHANH TOAN",
type:"personal",
amount:"500K",
msg:"Đồng nghiệp ngày xưa ở BIDV",
icon:"fas fa-user"
},
{
name:"VU KHUONG DUY",
type:"personal",
amount:"500K",
msg:"",
icon:"fas fa-user"
},
{
name:"PHAM VU QUOC THANG",
type:"personal",
amount:"300K",
msg:"",
icon:"fas fa-user"
},
{
name:"NGUYEN QUANG DUONG",
type:"personal",
amount:"500K",
msg:"",
avatar:"images/vinettech-vn-logo-1024x196.png"
},
{
name:"CAO THE TRONG",
type:"personal",
amount:"100K",
msg:"Bạn chung phòng KTX 20 năm trước",
icon:"fas fa-user"
},
{
name:"VO NGUYEN THIEN NHAN",
type:"personal",
amount:"1000K",
msg:"Cảm ơn sếp đã ủng hộ",
icon:"fas fa-user"
},
{
name:"NGUYEN PHONG HAI",
type:"personal",
amount:"500K",
msg:"",
icon:"fas fa-user"
}
];

document.addEventListener('DOMContentLoaded', () => {

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    loopAdditionalSlides: 10, 
    allowSlideNext: true,
    allowSlidePrev: true,
    watchSlidesProgress: false, 
    grabCursor: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        enabled: true, 
        hideOnClick: false, 
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
    const list = document.getElementById('sponsor-list');
    const noResults = document.getElementById('noResults');

    // Hàm render danh sách
    function render(items) {
        if (items.length === 0) {
            list.innerHTML = '';
            noResults.style.display = 'block';
            swiper.update();
            return;
        }
    
        noResults.style.display = 'none';
    
        list.innerHTML = items.map(item => {
    
            let avatarHTML = '';
            if (item.avatar) {
                avatarHTML = `
                    <a href="${item.link || '#'}" target="_blank">
                        <img src="${item.avatar}" class="avatar">
                    </a>
                `;
            }
    
            return `
                <div class="swiper-slide">
                    <div class="sponsor-node" data-aos="fade-up">

                        <div class="sponsor-info">
                            <h3>${item.name}</h3>
                            <div class="amount">Ủng Hộ: ${item.amount}</div>
                            <p class="msg">${item.msg ? `"${item.msg}"` : ""}</p>
                            <div class="bottom-row">
                  
                                ${avatarHTML ? avatarHTML : ""}

                                ${item.link ? `
                                    <a href="${item.link}" target="_blank" class="company-link">
                                        ${item.link}
                                    </a>
                                ` : ""}

                            </div>

                        </div>

                    </div>
                </div>
            `;
        }).join('');
    
        swiper.update();
        swiper.slideTo(0, 0);
    }

    // Hàm lọc
    function filterSponsors(type, btn) {
        document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filtered = type === 'all' ? sponsors : sponsors.filter(i => i.type === type);
        render(filtered);
    }

    // Counter Animation đơn giản
    function animateCounter(id, end) {
        let start = 0;
        let obj = document.getElementById(id);
        let timer = setInterval(() => {
            start++;
            obj.innerText = start;
            if (start == end) clearInterval(timer);
        }, 50);
    }

    // Hiệu ứng chữ chạy
    var typed = new Typed('.typed-words', {
        strings: [
            "Làm từ đam mê và quyết tâm.",
            "Lấy cảm hứng từ sức sống mãnh liệt của Cây Tre."
        ],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });

    const ctaBox = document.getElementById('ctaBox');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            ctaBox.classList.add('visible');
            observer.unobserve(ctaBox);
        }
    });
}, {
    threshold: 0.3 
});

observer.observe(ctaBox);
    render(sponsors);
    animateCounter('count-sponsors', 42);
    animateCounter('count-money', 128);

    window.filterSponsors = filterSponsors;
});