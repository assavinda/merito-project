<template>
    <div>
        <!-- banner -->
        <SectionContents>
            <div class="flex flex-wrap-reverse items-center justify-center desktop:py-6xl laptop:py-5xl tablet:py-4xl mobile:py-3xl">
                <div class="space-y-6 tablet:mr-auto tablet:text-start mobile:mr-0 mobile:text-center">
                    <div>
                        <h1 class="text-black font-semibold desktop:text-2xl laptop:text-xl tablet:text-l mobile:text-m">
                            ร่วมเป็นส่วนหนึ่งในการ<br>
                            ส่งมอบความสุขทุกที่ทุกเวลา
                        </h1>
                        <p class="text-dark-gray desktop:text-s laptop:text-s tablet:text-xs mobile:text-xs">
                            merito แพลตฟอร์ม e-Donation ที่จะเป็นสื่อกลางในการรับบริจาค<br>
                            และการทำบุญในรูปแบบออนไลน์อย่างครบวงจร ปลอดภัยและน่าเชื่อถือ
                        </p>
                    </div>
                    <div>
                        <ButtonGeneral class="bg-orange">
                            <NuxtLink to="/donation/">
                                <p class="tablet:text-s mobile:text-xs">ร่วมบริจาค</p>
                            </NuxtLink>
                        </ButtonGeneral> 
                    </div>
                </div>

                <div class="relative justify-center items-center desktop:w-[564px] desktop:h-[505px] laptop:w-[468px] laptop:h-[419px] tablet:w-[343px] tablet:h-[307px] tablet:flex mobile:hidden">
                    <div class="absolute bg-orange bg-opacity-40 rounded-full blur-[120px] desktop:size-[363px] laptop:size-[240px] tablet:size-[196px]">
                        
                    </div>
                    <div class="z-[10]">
                        <img src="../public/images/hombanner.png" />
                    </div>
                </div>
            </div>
        </SectionContents>

        <!-- features -->
        <SectionContents>
            <div class="space-y-16 desktop:py-6xl laptop:py-5xl tablet:py-4xl mobile:py-3xl">

                <div class="w-full text-center">
                    <h2 class="text-black font-semibold desktop:text-xl laptop:text-l tablet:text-l mobile:text-m">ฟีเจอร์ของเรา</h2>
                </div>

                <div class="grid gap-6 desktop:grid-cols-4 laptop:grid-cols-4 tablet:grid-cols-2 mobile:grid-cols-4">
                    <div v-for="(feature, key) in features" class="flex justify-center">
                        <CardFeature  :name="feature.name" :describe="feature.describe">
                            <template v-slot:icondesktop>
                                <SvgoDonate v-if=" key == 'Donate' " class="size-16 text-orange" :fontControlled="false"/>
                                <SvgoMerit v-else-if=" key == 'Merit' " class="size-16 text-orange" :fontControlled="false"/>
                                <SvgoLive v-else-if=" key == 'Live' " class="size-16 text-orange" :fontControlled="false"/>
                                <SvgoShop v-else-if=" key == 'Shop' " class="size-16 text-orange" :fontControlled="false"/> 
                            </template>

                            <template v-slot:iconmobile>
                                <SvgoDonate v-if=" key == 'Donate' " class="size-16 text-orange" :fontControlled="false"/>
                                <SvgoMerit v-else-if=" key == 'Merit' " class="size-16 text-orange" :fontControlled="false"/>
                                <SvgoLive v-else-if=" key == 'Live' " class="size-16 text-orange" :fontControlled="false"/>
                                <SvgoShop v-else-if=" key == 'Shop' " class="size-16 text-orange" :fontControlled="false"/> 
                            </template>
                        </CardFeature>
                    </div>
                </div>

                <div class="w-full text-center">
                        <ButtonGeneral class="bg-black">
                            <NuxtLink to="/donation">
                                <p class="tablet:text-s mobile:text-xs">ดูรายละเอียด</p>
                            </NuxtLink>
                        </ButtonGeneral> 
                </div>
            </div>
        </SectionContents>

         <!-- partners -->
        <SectionContents class="bg-gradient-to-t from-light-orange from-80%">
            <div class="space-y-16 desktop:py-6xl laptop:py-5xl tablet:py-4xl mobile:py-3xl">
                <div class="w-full text-center">
                    <h2 class="text-black font-semibold desktop:text-xl laptop:text-l tablet:text-l mobile:text-m">วัดและมูลนิธิที่ร่วมโครงการ</h2>
                </div>

                <div class="relative">
                    <div class="h-full bg-light-orange absolute z-20 blur-md desktop:left-[32px] laptop:left-[32px] tablet:left-[32px] tablet:w-20 mobile:left-[-4px] mobile:w-8"></div>

                    <div class="h-full bg-light-orange absolute z-20 blur-md desktop:right-[32px] laptop:right-[32px] tablet:right-[32px] tablet:w-20 mobile:right-[-4px] mobile:w-8"></div>
                    <div class="flex overflow-x-scroll items-center py-7 space-x-6 desktop:mx-20 laptop:mx-20 tablet:mx-20 mobile:mx-2">
                        <div>
                            <div class="h-full tablet:w-[88px] mobile:w-[38px]"></div>
                        </div>

                       <CardPartner v-for="([key, card], index) in Object.entries(donationData).slice(0, 6)"
                       :name="key"
                       :describe="card.describe"
                       :location="card.location"
                       :thumbnail="card.thumbnail"/> 

                       <NuxtLink to="/donation/">
                            <div class="flex items-center">
                                <div class="mr-2 tablet:ml-[32px] mobile:ml-[12px]">
                                    <p class="font-medium text-orange w-16">
                                        ดูทั้งหมด
                                    </p>
                                </div>
                                <div class="hover:bg-orange hover:text-white border-2 border-orange text-orange size-[88px] rounded-full mr-[100px] flex justify-center items-center">
                                    <SvgoArrowRight class="size-[48px]" :fontControlled="false"/>
                                </div>
                            </div>
                        </NuxtLink>
                    </div>
                </div>

                <div class="w-full text-center">
                        <ButtonGeneral class="bg-black">
                            <NuxtLink to="/donation/">
                                <p class="tablet:text-s mobile:text-xs">ดูทั้งหมด</p>
                            </NuxtLink>
                        </ButtonGeneral> 
                </div>
            </div>
        </SectionContents>

          <!-- payment methods -->
        <SectionContents>
            <div class="space-y-16 desktop:py-6xl laptop:py-5xl tablet:py-4xl mobile:py-3xl">
                <div class="w-full text-center">
                    <h2 class="text-black font-semibold desktop:text-xl laptop:text-l tablet:text-l mobile:text-m">ช่องทางการชำระเงิน</h2>
                </div>

                <div class="grid gap-6 tablet:grid-cols-4 mobile:grid-cols-2">
                    <div v-for="(method,key) in paymentMethods" class="flex justify-center">
                        <CardPaymentMeth :name="method.name" :image="method.image" :describe="method.describe"/>
                    </div>
                </div>
            </div>
        </SectionContents>

          <!-- FAQs -->
        <SectionContents>
            <div class="space-y-16 desktop:py-6xl laptop:py-5xl tablet:py-4xl mobile:py-3xl">
                <div class="w-full text-center">
                    <h2 class="text-black font-semibold desktop:text-xl laptop:text-l tablet:text-l mobile:text-m">คำถามที่พบบ่อย</h2>
                </div>

                <div class="grid gap-3">
                    <div v-for="accordion in 6" class="w-full flex justify-center">
                        <ElementAccordion/>
                    </div>
                </div>
            </div>
        </SectionContents>
    </div>
</template>

<script setup>
const donationData = {
    'วัดแอดไวซ์เมริโตะ': {
        tag: 'ศาสนา',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการสร้างเว็บทำบุญ' : {
                describe:'ร่วมช่วยบริจาคเพื่อช่วยเหลือในการสมทบทุนสำหรับสร้างเว็บไซต์ merito ซึ่งจะเป็นแพลตฟอร์มที่ช่วยให้การทำบุญของท่านไม่เป็นเรื่องยากเย็นอีกต่อไป',
                thumbnail: 'https://www.computersciencedegreehub.com/wp-content/uploads/2023/02/shutterstock_535124956-scaled.jpg'
            },
            'โครงการสร้างเว็บทำบุญอีกเว็บนึง' : {
                describe:'กลับมาอีกครั้งสำหรับ ช่องทางการร่วมช่วยบริจาคให้เราได้สร้างเว็บทำบุญอีกครั้งนึง',
                thumbnail: 'https://media.licdn.com/dms/image/D4D12AQGkhVu2gh8X6g/article-cover_image-shrink_600_2000/0/1716287814954?e=2147483647&v=beta&t=ED8s7ACPwHL_6r9e_9SsHwqzrqpG_1Gkng8sPu7umPo'
            },
            'โครงการสร้างเว็บทำบุญอีกรอบละกัน' : {
                describe:'ร่วมช่วยบริจาคให้เราได้สร้างเว็บทำบุญอีกรอบ',
                thumbnail: 'https://i.insider.com/601441dd6dfbe10018e00c25?width=1136&format=jpeg'
            },
            'โครงการสร้างเว็บทำบุญอีกทีนะ' : {
                describe:'ร่วมช่วยบริจาคให้เราได้สร้างเว็บทำบุญอีกทีนึง',
                thumbnail: 'https://ddnc0nx6xfvo1.cloudfront.net/wp-content/w3-webp/uploads/2019/11/coding.jpgw3.webp'
            },
        },
        thumbnail: 'https://mpics.mgronline.com/pics/Images/566000011622402.JPEG'
    },
    'มูลนิธิเพื่อไก่ในเล้า': {
        tag: 'สัตว์และสิ่งแวดล้อม',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการผู้พันวันอังคาร' : {
                describe:'สมทบทุนช่วยเหลือเพื่อสร้างไก่ทอดเซตผู้พันวันอังคาร',
                thumbnail: 'https://img.salehere.co.th/p/1200x0/2023/11/21/h5dke7p9028u.jpg'
            },
            'โครงการผู้พันแชร์กัน' : {
                describe:'วันพฤหัสบดี พบกับเซตผู้พันแชร์กันสุดคุ้ม',
                thumbnail: 'https://img.salehere.co.th/p/1200x0/2023/11/21/h5dke7p9028u.jpg'
            },
            'โครงการทอดไก่ให้ครบ 1000 ตัว เพื่อสังเวยให้กับเทพเจ้าไก่' : {
                describe:'เราจะทอดไก่ให้ครบถึง 1000 ตัว และประกอบพิธีกรรมบูชายัญไก่',
                thumbnail: 'https://mpics.mgronline.com/pics/Images/563000011610301.JPEG'
            },
            'โครงการสงเคราะห์ไก่ตาดำ ๆ ให้ได้ลืมตาอ้าปากอีกครั้ง' : {
                describe:'เหล่าไก่ที่น่าสงสารกำหลังรอคอยความช่วยเหลือจากพวกคุณ',
                thumbnail: 'https://www.worldanimalprotection.or.th/cdn-cgi/image/fit=cover,width=1280/siteassets/article/gettyimages-915441416_0.jpg'
            },
        },
        thumbnail: 'https://mallparkhouse.ru/upload/iblock/a69/wdiulb3xfchrwx2zded3qgmu6ne4tzuw.jpg'
    },
    'วัดความยาว': {
        tag: 'ศาสนา',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการสร้างไม้บรรทัด' : {
                describe:'บริจาคด่วน! เพื่อสร้างไม้บรรทัดสำหรับวัดความยาว',
                thumbnail: 'https://www.siriwongpanid.com/wp-content/uploads/2019/01/2041051-600x600.jpg'
            },
            'โครงการสร้างไม้เมตร' : {
                describe:'บริจาคตอนนี้เพื่อสร้างไม้เมตรให้เรา',
                thumbnail: 'https://media.istockphoto.com/id/495631811/photo/drawing-wooden-meter-ruler.jpg?s=170667a&w=0&k=20&c=RseHyO6oIkY3uIbqu9q0CuICKS6mlOYoOuJPzu801p0='
            },
            'โครงการสร้างตลับเมตร' : {
                describe:'เราอยากได้ตลับเมตร เพราะมันวัดความยาวได้สะดวกดี',
                thumbnail: 'https://ktw.co.th/medias/sys_master/SAP-L01/SAP-L01/hc5/h9e/9692781608990/-STANLEY-S351-30496-180TH-1.jpg'
            },
            'โครงการสร้างความยาว 100 เมตร' : {
                describe:'เราจะสามารถวัดความยาวได้ถึง 100 เมตร เราวัดอะไรไม่ได้หากไม่มีความยาว มาช่วยกันนะ!',
                thumbnail: 'https://mpics.mgronline.com/pics/Images/564000004759501.JPEG'
            },
            'โครงการสร้างความยาว 1000 เมตร' : {
                describe:'เราจะสามารถวัดความยาวได้ถึง 1000 เมตรแล้ว! มาช่วยกันอีกทีนะ!',
                thumbnail: 'https://s359.kapook.com/pagebuilder/973c019c-d403-40af-bfe2-bf21c4dd4385.jpg'
            },
            'โครงการสร้างความยาว 10000 เมตร' : {
                describe:'เราจะสามารถวัดความยาวถึง 10000 เมตรได้!',
                thumbnail: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K78gKQKBzmceXNWPxGBqYzN1OBWaD5pB6FrgMNbN3Pp3ihqvvi.jpg'
            },
        },
        thumbnail: 'https://www.expedia.co.th/stories/wp-content/uploads/2022/07/1.The-Grand-Palace-1.jpg'
    },
    'มูลนิธิกระจกเงาหมื่นบุปผา': {
        tag: 'การแพทย์',
        location: 'หมู่บ้านโคโนฮะ',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            
        },
        thumbnail: 'https://i.pinimg.com/originals/86/16/de/8616de44c0dd7d004b2312469436a53d.jpg'
    },
    'วัดซัพโบร': {
        tag: 'ศาสนา',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการโย่โย่ว' : {
                describe:'เราจะสร้างโยโย่วที่โคตรเท่',
                thumbnail: 'https://blog.pitsco.com/hs-fs/hubfs/Blog%20Images/Playing-yo-yo-1366-0620.jpg?width=1366&name=Playing-yo-yo-1366-0620.jpg'
            },
            'โครงการสร้างเว็บทำบุญ' : {
                describe:'ร่วมช่วยบริจาคให้เราที ผมก๊อปเมริโตะมา',
                thumbnail: 'https://spaces-wp.imgix.net/2016/06/coding-in-the-classroom.png?auto=compress,format&q=50'
            },
        },
        thumbnail: 'https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2022/07/travel-1-4.jpg'
    },
    'มูลนิธิเพื่อเด็กๆ': {
        tag: 'การศึกษา',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการสร้างเด็กดี' : {
                describe:'ร่วมช่วยบริจาคให้เราได้สั่งสอนเด็กให้เติบโตเป็นบุคลากรที่ดี',
                thumbnail: 'https://compote.slate.com/images/056e5bdc-8adb-4606-98be-d820ab028e13.jpeg?crop=1560%2C1040%2Cx0%2Cy0'
            },
        },
        thumbnail: 'https://png.pngtree.com/png-clipart/20200710/original/pngtree-kids-logo-png-image_4135777.jpg'
    },
    'มูลนิธิกระจกฝ้า': {
        tag: 'การแพทย์',
        location: 'จ.เชียงใหม่',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการสร้างกระจกฝ้ามัว ๆ' : {
                describe:'กระจกฝ้าโคตรมัว !',
                thumbnail: 'https://krajok.com/wp-content/uploads/2024/06/frost1.jpg'
            },
            'โครงการสร้างกระจกฝ้าเจ๋ง ๆ' : {
                describe:'กระจกฝ้าโคตรเจ๋ง !',
                thumbnail: 'https://www.autodoorcenter.com/wp-content/uploads/2023/07/ประตูกระจกฝ้ามีประโยชน์มากมมายในทั้งที่อยู่อาศัยและอาคารพาณิชย์.jpg'
            },
            'โครงการสร้างกระจกฝ้าใหญ่ ๆ' : {
                describe:'กระจกฝ้าโคตรใหญ่ !',
                thumbnail: 'https://icmagicfilm.com/wp-content/uploads/2021/03/IMG_8478-copy-1024x768.jpg'
            },
            'โครงการสร้างกระจกฝ้าเฉย ๆ' : {
                describe:'กระจกฝ้า !',
                thumbnail: 'https://multimedia.3m.com/mws/media/1042043J/fas-sh2maml.jpg?width=506'
            },
        },
        thumbnail: 'https://preview.redd.it/freebie-frosted-glass-effect-figma-v0-zngmts2fihcc1.jpg?width=1080&crop=smart&auto=webp&s=ff53c71ba92900f5b3cc65c5f7c220ec43e334e0'
    },
    'วัดดูยูมีนบุรี': {
        tag: 'ศาสนา',
        location: 'จ.มีนบุรี',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการสร้างอะไรดี' : {
                describe:'สร้างอะไรดีนะ',
                thumbnail: 'https://images.inc.com/uploaded_files/image/1920x1080/getty_171146750_970647970450035_88518.jpg'
            },
        },
        thumbnail: 'https://mpics.mgronline.com/pics/Images/566000011622403.JPEG'
    },
    'มูลนิธิกระจกมองหลัง': {
        tag: 'การศึกษา',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการสอนขับรถ' : {
                describe:'บริจาคให้เรามีงบซื้อรถดี ๆ สักคันนะครับ',
                thumbnail: 'https://www.hugsinsurance.com/storage/images/article/msc7hHsSViMY8oL1pV80wvCj5ndWaJZE.jpeg'
            },
            'โครงการดูกระจกมองหลัง' : {
                describe:'คิดไม่ออก',
                thumbnail: 'https://media.istockphoto.com/id/513478318/th/รูปถ่าย/การปรับกระจกมองหลัง.jpg?s=1024x1024&w=is&k=20&c=6xQbVqjHERBbLX06dI-sG4XofKz7hC4CwAuhwmZFw54='
            },
        },
        thumbnail: 'https://smartcdn.gprod.postmedia.digital/driving/wp-content/uploads/2018/09/mirrors.png'
    },
    'วัดอรุณเบิกฟ้าราชวราราม': {
        tag: 'ศาสนา',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการตื่นแต่เช้าเลยนะ' : {
                describe:'เราจะตื่นเช้า ๆ ตั้งแต่ไก่โห่',
                thumbnail: 'https://www.thaiheartfound.org/upload/26025/userfiles/26092017.jpg'
            },
            'โครงการสร้างโบสถ์' : {
                describe:'เราจะสร้างโบสถ์',
                thumbnail: 'https://mpics.mgronline.com/pics/Images/563000013537801.JPEG'
            },
            'โครงการสร้างวัด' : {
                describe:'เราจะสร้างวัด',
                thumbnail: 'https://img.wongnai.com/p/624x0/2018/07/31/14c189e64df54897ac2f917e26c68509.jpg'
            },
        },
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/วัดอรุณราชวรารามราชวรมหาวิหาร_กลางคืน.jpg/800px-วัดอรุณราชวรารามราชวรมหาวิหาร_กลางคืน.jpg'
    },
    'มูลนิธิแท็กการแพทย์ สาขากรุงเทพมหานคร': {
        tag: 'การแพทย์',
        location: 'กรุงเทพมหานคร',
        describe: 'รายละเอียดข้อมูลเกี่ยวกับประวัติความเป็นมา วัดองค์กรหรือมูลนิธิ โครงการที่เปิดรับบริจาค วัตถุประสงค์และประโยชน์',
        project: {
            'โครงการสร้างแพทย์' : {
                describe:'ผมจะไปเรียนแพทย์ ขอค่าเล่าเรียนให้ผมที !',
                thumbnail: 'https://c8.alamy.com/comp/2G9G625/portrait-of-doctor-therapeutic-or-medical-advisor-at-work-funny-meme-emotions-concept-of-healthcare-care-medicine-and-humor-2G9G625.jpg'
            },
            'โครงการรักษาโรค' : {
                describe:'ผมเป็นหมอ และผมจะรักษาคนไข้ 1 คนต่อ 10 บาทที่คุณบริจาคมา',
                thumbnail: 'https://i.kym-cdn.com/photos/images/newsfeed/001/688/917/f1e.jpg'
            },
            'โครงการของหมอ' : {
                describe:'ไม่มีอะไร ผมแค่อยากได้เงินน่ะ !',
                thumbnail: 'https://i.imgflip.com/4/hicns.jpg'
            },
        },
        thumbnail: 'https://assets.brandinside.asia/uploads/2021/11/shutterstock_304436009.jpg'
    },
};
const paymentMethods = {
    PromptPay: {
        name:'พร้อมเพย์',
        describe: 'พร้อมเพย์ (Promptpay) ผ่าน QR payment หรือ Mobile Banking ทุกธนาคาร',
        image: 'PromptPay'
    },
    CreditDebit: {
        name:'บัตรเครดิต/เดบิต',
        describe: 'บัตรเครดิต/เดบิต (Credit/Debit card) ผ่านการเชื่อมต่อบัตร Visa หรือ Master Card',
        image: 'CreditDebit'
    },
    TrueMoney: {
        name:'ทรูมันนี่',
        describe: 'ทรู มันนี่ (TrueMoney Wallet) ผ่านแอปพลิเคชัน ทรู มันนี่',
        image: 'TrueMoney'
    },
    LINEpay: {
        name:'ไลน์ เพย์',
        describe: 'ไลน์ เพย์ (LINE Pay) ผ่านแอปพลิเคชันไลน์',
        image: 'LINEpay'
    },
};

const features = {
    Donate:{
        name: 'บริจาค',
        describe: 'ติดตามสถานะเงินบริจาคตั้งแต่ต้นทาง จนถึงปลายทางครอบคลุมทั้ง โครงการวัดและมูลนิธิ',
    },
    Merit:{
        name: 'ทำบุญ',
        describe: 'เลือกทำบุญออนไลน์ให้วัดที่ศรัทธา ตั้งแต่การใส่บาตร ถวายสังฆทาน ถวายดอกไม้ธูปเทียน',
    },
    Live:{
        name: 'ไลฟ์',
        describe: 'รับชมการถ่ายทอดสดเทศนาธรรม สวดมนต์ นั่งสมาธิ วิปัสสนา กับพระอาจารย์แบบเรียลไทม์',
    },
    Shop:{
        name: 'ร้านค้า',
        describe: 'นำแต้มจากการบริจาคแลกซื้อวัตถุมงคลและของที่ระลึกจากวัดที่ศรัทธา',
    },
}

</script>

<style scoped>

</style>