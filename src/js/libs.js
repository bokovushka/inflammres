import 'bootstrap'

import Plyr from 'plyr';
const player = new Plyr('#player');
const player1 = new Plyr('#player1');
const player2 = new Plyr('#player2');
const player3 = new Plyr('#player3');
const player4 = new Plyr('#player4');
const player5 = new Plyr('#player5');

//swiper
import Swiper from 'swiper/bundle';

const reviewSwiper = new Swiper('.review__swiper', {
	grabCursor: true,
	spaceBetween: 20,
	breakpoints: {
		1260: {
			slidesPerView: 3,
			spaceBetween: 44,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1,
		}
	},
	navigation: {
		prevEl: ".review .swiper__buttons .btn__swiper-prev",
		nextEl: ".review .swiper__buttons .btn__swiper-next"
	},
	pagination: {
		el: ".review .swiper-pagination",
		clickable: true,
	},
})

var SwiperGalleryThumbs = new Swiper(".swiper-gallery-thumbs", {
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
var SwiperGalleryMain = new Swiper(".swiper-gallery-main", {
	spaceBetween: 10,
	navigation: {
		nextEl: ".about-doctor__gallery .btn__swiper-next",
		prevEl: ".about-doctor__gallery .btn__swiper-prev",
	},
	thumbs: {
		swiper: SwiperGalleryThumbs,
		slidesPerView: 4,
	},
});

var SwiperSymtoms = new Swiper(".swiper-symtoms", {
	spaceBetween: 20,
	breakpoints: {
		1260: {
			slidesPerView: 4,
			spaceBetween: 38,
		},
		992: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 2,
		},
		360: {
			slidesPerView: 1,
		}
	},
	navigation: {
		prevEl: ".swiper-symtoms .btn__swiper-prev",
		nextEl: ".swiper-symtoms .btn__swiper-next"
	},
});

var OtherSymtoms = new Swiper(".swiper-other-symtoms", {
	slidesPerView: 1,
	breakpoints: {
		768: {
			slidesPerView: 3,
		},
		360: {
			slidesPerView: 1,
			spaceBetween: 10,
			grabCursor: true,
		}
	},
	navigation: {
		prevEl: ".other-symtoms .btn__swiper-prev",
		nextEl: ".other-symtoms .btn__swiper-next"
	},
	pagination: {
		el: ".other-symtoms .swiper-pagination",
		clickable: true,
	},
});

import tippy from 'tippy.js';

tippy('#tooltip-1-5', {
	content: '<ol><li>Serhan CN. Pro-resolving lipid mediators are leads for resolution physiology. Nature. 2014;510(7503):92-101. doi:10.1038/nature13479.</li><li>Sugimoto MA, Sousa LP, Pinho V, Perretti M, Teixeira MM. Resolution of inflammation: what controls its onset? Front Immunol. 2016;7:160. doi:10.3389/fimmu.2016.00160.</li><li>Feehan KT, Gilroy DW. Is resolution the end of inflammation? Trends Mol Med. 2019;25(3):198-214. doi:10.1016/j.molmed.2019.01.006.</li><li>Jones HR, Robb CT, Perretti M, Rossi AG. The role of neutrophils in inflammation resolution. Semin Immunol. 2016;28(2):137-145. doi:10.1016/j.smim.2016.03.007.</li><li>De Oliveira S, Rosowski EE, Huttenlocher A. Neutrophil migration in infection and wound repair: going forward in reverse. Nat Rev Immunol. 2016;16(6):378-391. doi:10.1038/nri.2016.49.</li></ol>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-6', {
	content: '<p>Fullerton JN, Gilroy DW. Resolution of inflammation: a new therapeutic frontier. Nat Rev Drug Discov. 2016;15(8):551-567. doi:10.1038/nrd.2016.39.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-2', {
	content: '<p>Sugimoto MA, Sousa LP, Pinho V, Perretti M, Teixeira MM. Resolution of inflammation: what controls its onset? Front Immunol. 2016;7:160. doi:10.3389/fimmu.2016.00160.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-7', {
	content: '<p>Loynes CA, Lee JA, Robertson AL, et al. PGE2 production at sites of tissue injury promotes an anti-inflammatory neutrophil phenotype and determines the outcome of inflammation resolution in vivo. Sci Adv. 2018;4(9):eaar8320. doi:10.1126/sciadv.aar8320.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-8', {
	content: '<p>Cesnulevicius K. The bioregulatory approach to work-related musculoskeletal disorders: using the multicomponent ultra low-dose medication Traumeel to target the multiple pathophysiological processes of the disease. Altern Ther Health Med. 2011;17(suppl 2):S8-S17.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-9-10', {
	content: '<ol start="9"><li>Lussignoli S, Bertani S, Metelmann H, Bellavite P, Conforti A. Effect of Traumeel S, a homeopathic formulation, on blood-induced inflammation in rats. Complement Ther Med. 1999;7(4):225-230. doi: 10.1016/S0965-2299(99)80006-5.</li><li>Conforti A, Bertani S, Metelmann H, Chirumbolo S, Lussignoli S, Bellavite P. Experimental studies on the anti-inflammatory activity of a homeopathic preparation. Biomed Ther. 1997;15(1):28-31.</li></ol>',
	allowHTML: true,
	placement: 'bottom',
	interactive: true,
});
tippy('#tooltip-11', {
	content: '<p>St. Laurent G III, Seilheimer B, Tackett M, et al. Deep sequencing transcriptome analysis of murine wound healing: effects of a multicomponent, multitarget natural product therapy-Tr14. Front Mol Biosci. 2017;4:57. doi:10.3389/fmolb.2017.00057.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-12', {
	content: '<p>Zell J, Connert WD, Mau J, Feuerstake G. Treatment of acute sprains of the ankle: a controlled double-blind trial to test the effectiveness of a homeopathic ointment. Biol Ther. 1989;7(1):1-6.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-13', {
	content: '<p>Böhmer D, Ambrus P. Treatment of sports injuries with Traumeel ointment: a controlled double-blind study. Biol Ther. 1992;10(4):290-300.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-14', {
	content: '<p>Lozada CJ, del Rio E, Reitberg DP, Smith RA, Kahn CB, Moskowitz RW. A double-blind, randomized, saline-controlled study of the efficacy and safety of co-administered intra-articular injections of Tr14 and Ze14 for treatment of painful osteoarthritis of the knee: the MOZArT trial. Eur J Integr Med. 2017;13:54-63. doi:10.1016/j.eujim.2017.07.005</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-15-16', {
	content: '<ol start="15"><li>González de Vega C, Speed C, Wolfarth B, González J. Traumeel vs. diclofenac for reducing pain and improving ankle mobility after acute ankle sprain: a multicentre, randomised, blinded, controlled and non-inferiority trial. Int J Clin Pract. 2013;67(10):979-989. doi:10.1111/ijcp.12219.</li><li>Schneider C, Klein P, Stolt P, Oberbaum M. A homeopathic ointment preparation compared with 1% diclofenac gel for acute symptomatic treatment of tendinopathy. Explor J Sci Heal. 2005;1(6):446-452. doi:10.1016/j.explore.2005.08.010.</li></ol>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-15', {
	content: '<p>González de Vega C, Speed C, Wolfarth B, González J. Traumeel vs. diclofenac for reducing pain and improving ankle mobility after acute ankle sprain: a multicentre, randomised, blinded, controlled and non-inferiority trial. Int J Clin Pract. 2013;67(10):979-989. doi:10.1111/ijcp.12219.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-16', {
	content: '<p>Schneider C, Klein P, Stolt P, Oberbaum M. A homeopathic ointment preparation compared with 1% diclofenac gel for acute symptomatic treatment of tendinopathy. Explor J Sci Heal. 2005;1(6):446-452. doi:10.1016/j.explore.2005.08.010.</p>',
	allowHTML: true,
	interactive: true,
});
tippy('#tooltip-17', {
	content: '<p>Birnesser H, Oberbaum M, Klein P, Weiser M. The homeopathic preparation Traumeel S compared with NSAIDs for symptomatic treatment of epicondylitis. J Musculoskelet Res. 2004;8(2 & 3):119-128. doi:10.1142/S0218957704001284.</p>',
	allowHTML: true,
	interactive: true,
});