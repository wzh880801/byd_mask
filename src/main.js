define("utils/main.js", function (require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
	"use strict";
	var e = require("util.js"),
		i = {
			login_sendMsgCode: "/weixin/mina/?service=mina.sendMsgCode",
			login_sendVoiceCode: "/weixin/mina/?service=mina.sendVoiceCode",
			login_bindUid: "/weixin/mina/?service=mina.bindUid",
			login_pwdBindUid: "/weixin/mina/?service=mina.pwdBindUid",
			login_bindWithPhoneNum: "/weixin/mina/?service=mina.bindWithPhoneNum",
			updateMobile: "&serviceDir=ucx.updateMobile&model=uc",
			sendUserToEachApplications: "&serviceDir=uc.sendUserToEachApplications&model=uc",
			getAgreementStatus: "/weixin/mina/?service=mina.getAgreementStatus",
			setAgreementStatus: "/weixin/mina/?service=mina.setAgreementStatus",
			delAgreementStatus: "/weixin/mina/?service=mina.delAgreementStatus",
			getMainBanner: "/weixin/mina/?service=mina.mainBanner",
			auth: "&model=carowner&serviceDir=CarOwnerAuthBusiness.QueryCarListAndCarOwnerAuthentication",
			me_queryCarList: "&model=carowner&serviceDir=CarOwnerAuthBusiness.queryCarListByUid",
			me_findCarInfo: "&model=carowner&serviceDir=AssociatedVehicleBusiness.findCarInfoByRealcarId",
			me_findCarInfoAll: "&model=carowner&serviceDir=AssociatedVehicleBusiness.findCarInfoByRealcarIdAndUid",
			me_updateCarNo: "&model=carowner&serviceDir=CarOwnerAuthBusiness.updateCarNo",
			me_getCarList: "&model=carowner&serviceDir=AssociatedVehicleBusiness.CarList",
			me_removeCarInfo: "&model=carowner&serviceDir=AssociatedVehicleBusiness.RemoveCarInfo",
			me_updateCarInfo: "&model=carowner&serviceDir=AssociatedVehicleBusiness.UpdateCarInfo",
			me_addCarInfo: "&model=carowner&serviceDir=AssociatedVehicleBusiness.addCarInfo",
			me_getCarAuthorizeList: "&serviceDir=Authorize.CarAuthorize.getCarAuthorizeList",
			me_processUpload: "&serviceDir=Wechater.CarOcrService.processUpload&__debug__=1",
			me_upload: "&serviceDir=Wechater.CarOcrService.upload",
			me_cancelShare: "&serviceDir=Authorize.CarAuthorize.cancelShare",
			me_cancelCarAuthorize: "&serviceDir=Authorize.CarAuthorize.cancelCarAuthorize",
			me_shareCarAuthorize: "&serviceDir=Authorize.CarAuthorize.shareCarAuthorize",
			me_applyForAuthorization: "&serviceDir=Authorize.CarAuthorize.applyForAuthorization",
			me_getApply: "&serviceDir=Authorize.CarAuthorize.getApply",
			me_processAuthorize: "&serviceDir=Authorize.CarAuthorize.processAuthorize",
			me_queryAuthorizeCarInfo: "&serviceDir=Authorize.CarAuthorize.queryAuthorizeCarInfo",
			me_setDefaultCar: "&serviceDir=Authorize.DefaultCar.setDefaultCar",
			service_bookRemindToDMS: "&serviceDir=Wechater.CarServiceF_CarServiceFront.bookRemindToDMS",
			service_findServiceRecordDetail: "&serviceDir=Wechater.CarServiceF_CarServiceFront.findServiceRecordDetail",
			service_findServiceList: "&serviceDir=Wechater.CarServiceF_CarServiceFront.findServiceList",
			service_modifyService: "&serviceDir=Wechater.CarServiceF_CarServiceFront.modifyService",
			service_queryBookingLimitInfo: "&serviceDir=Wechater.CarServiceF_CarServiceFront.queryBookingLimitInfo",
			service_insertCarService: "&serviceDir=Wechater.CarServiceF_CarServiceFront.insertCarService",
			service_queryDealerList: "&model=bydfans&serviceDir=DealerService.QueryDealerListByProvinceAndCity",
			doorToDoor_getOrderInfo: "&serviceDir=api/Plusnew/getOrderInfo",
			doorToDoor_getPrePrice: "&serviceDir=api/Plusnew/getPrePrice",
			doorToDoor_getTrace: "&serviceDir=api/Plusnew/edaijiaTrace",
			doorToDoor_cancelOrder: "&serviceDir=api/Plusnew/cancelOrder",
			doorToDoor_carPlus: "&serviceDir=api/Plusnew/carPlus",
			doorToDoor_checkVidVin: "&model=carowner&serviceDir=Tvinvip.checkVidVin",
			doorToDoor_getCardByUid: "&serviceDir=api/coupon/getCardByUid",
			maintenance_getOption: "&model=upkeep&serviceDir=UpkeepManual.getOption",
			maintenance_getUpkeepSimplifiedManualByChoise: "&model=upkeep&serviceDir=UpkeepManual.getUpkeepSimplifiedManualByChoise",
			maintenance_getCarUpkeepMileTime: "&model=upkeep&serviceDir=UpkeepManual.getCarUpkeepMileTime",
			maintenance_getSimplified: "&model=upkeep&serviceDir=UpkeepManual.getUpkeepSimplifiedManualByRealcarId",
			win_getLevel: "&model=carowner&serviceDir=CarOwnerWinBusiness.QueryCurryuserAffliation",
			win_getRankingList: "&model=carowner&serviceDir=CarOwnerWinBusiness.QueryRankingList",
			win_getMyIntroduce: "&model=carowner&serviceDir=CarOwnerWinBusiness.QueryMyIntroduceCars",
			win_getNotice: "&model=carowner&serviceDir=CarOwnerWinBusiness.QueryCurryuserNotice",
			win_comfirmWwAffiliation: "&model=carowner&serviceDir=CarOwnerWinBusiness.comfirmWwAffiliation",
			win_notComfirmWwAffiliation: "&model=carowner&serviceDir=CarOwnerWinBusiness.notComfirmWwAffiliation",
			win_addIntroNtice: "&model=carowner&serviceDir=CarOwnerWinBusiness.AddIntroNtice",
			win_sendMsg: "/weixin/mina/?service=mina.sendMsgWin",
			win_queryReferrer: "&model=carowner&serviceDir=CarOwnerWinBusiness.QueryReferrerByphone",
			win_getBankInfos: "&model=user&serviceDir=BankService.findBankInfosByuserId",
			win_getBankList: "&model=user&serviceDir=BankService.FindOpenBankList",
			win_getBankInfo: "&model=user&serviceDir=BankService.FindBankInfoById",
			win_modifyBankInfo: "&model=user&serviceDir=BankService.ModifyBankInfo",
			win_addBankInfo: "&model=user&serviceDir=BankService.AddBankInfo",
			complaintAdvice_leadingIn: "&model=complandsug&serviceDir=ComplAndSuggest.queryCarListByUIdNewCompl",
			complaintAdvice_getCarList: "&model=complandsug&serviceDir=ComplAndSuggest.CarTypeByOrder",
			complaintAdvice_complaintAdvice: "&model=complandsug&serviceDir=ComplAndSuggest.FindComplAndSuggest",
			complaintAdvice_subComplaint: "&model=complandsug&serviceDir=ComplAndSuggest.InsertCarComplain",
			complaintAdvice_subAdvice: "&model=complandsug&serviceDir=ComplAndSuggest.InsertCarSuggest",
			complaintAdvice_dealer: "&model=complandsug&serviceDir=ComplAndSuggest.QueryDealerCompl",
			myAdvice_CarTypeByOrder: "&serviceDir=Service.MyFeedback.CarTypeByOrder",
			myAdvice_insertSuggest: "&serviceDir=Service.MyFeedback.insertSuggest",
			myAdvice_findComplAndSuggest: "&serviceDir=Service.MyFeedback.findComplAndSuggest",
			myAdvice_insertQuestion: "&serviceDir=Service.MyFeedback.insertQuestion",
			wd_queryDealerList: "&model=site&serviceDir=DealerSiteSearch.QueryDealerSite",
			mall_homeInfo: "/weixin/mina/?service=MinaMall.MinaShopHomePage",
			mall_4Gshop_createOrderInfo: "&model=fourg&serviceDir=FourGShopService.CreateOrderInfo",
			mall_4Gshop_getPreidAndSign: "&model=fourg&serviceDir=FourGShopService.GetPreidAndSign",
			mall_4Gshop_updateOrderDealInfo: "&model=fourg&serviceDir=FourGShopService.UpdateOrderDealInfo",
			mall_4Gshop_sendSubscribeByOrdNo: "&model=fourg&serviceDir=FourGShopService.sendSubscribeByOrdNo",
			mall_4Gshop_selectGoodsListByVinNew: "&model=fourg&serviceDir=FourGShopService.selectGoodsListByVinNew",
			mall_4Gshop_findGoodsByVin: "&model=fourg&serviceDir=FourGShopService.findGoodsByVin",
			mall_4Gshop_getVin: "&model=fourg&serviceDir=Car4Shop.getVin",
			mall_4Gshop_findGoodsInfoByGoodsId: "&model=fourg&serviceDir=FourGShopService.FindGoodsInfoByGoodsId",
			mall_4Gshop_getAllServUseStaByVin: "&model=fourg&serviceDir=FourGShopService.getAllServUseStaByVin",
			mall_O2O_goodsList: "&serviceDir=api/index/goodsList",
			mall_O2O_goodsDetails: "&serviceDir=api/index/goodsDetails",
			mall_O2O_showProvince: "&serviceDir=api/index/showProvince",
			mall_O2O_getCity: "&serviceDir=api/index/getCityByPid",
			mall_O2O_getJoinshop: "&serviceDir=api/index/getJoinshopByGoodsId",
			mall_O2O_createServicePackOrder: "/weixin/mina/?service=MinaMall.createServicePackOrder",
			mall_O2O_updateServicePackOrder: "/weixin/mina/?service=MinaMall.updateServicePackOrder",
			mall_myOrderList: "/weixin/mina/?service=MinaMall.MyOrderList",
			mall_myOrderListNew: "/weixin/mina/?service=MinaMall.MyOrderListNew",
			mall_getOrderListEachCountNew: "/weixin/mina/?service=MinaMall.getOrderListEachCountNew",
			mall_getOrderListEachCount: "/weixin/mina/?service=MinaMall.getOrderListEachCount",
			mall_O2O_myOrderDetail: "/weixin/mina/?service=MinaMall.MyOrderDetail",
			mall_4Gshop_myOrderDetail: "/weixin/mina/?service=MinaMall.findOrderInfoByTransactionid",
			mall_O2O_getAgreeStatus: "/weixin/mina/?service=MinaMall.agreeStatus",
			mall_O2O_getPhoneName: "/weixin/mina/?service=mina.getAuthDetail&type=wechat",
			mall_O2O_ifCombByComc_idGetMsg: "&serviceDir=api/index/ifCombByComc_idGetMsg",
			mall_020_checkCityLevel: "&serviceDir=api/index/checkCityLevel",
			mall_020_checkInventory: "&serviceDir=api/index/checkInventory",
			mall_accessoryGoodsType: "&serviceDir=api/accessory/goodsType",
			mall_accessoryList: "&serviceDir=api/accessory/accessoryList",
			mall_accessoryDetails: "&serviceDir=api/accessory/accessoryDetails",
			mall_all_goodsListSearchByName: "/weixin/mina/?service=minaMall.goodsListSearchByName",
			mall_createAccessoryOrder: "/weixin/mina/?service=MinaMall.createAccessoryOrder",
			mall_updateAccessoryOrder: "/weixin/mina/?service=MinaMall.updateAccessoryOrder",
			mall_getCanReceiveCouponList: "&serviceDir=api/index/getCanReceiveCouponList",
			mall_receiveCoupon: "&serviceDir=api/index/receiveCoupon",
			mall_getCanUseCouponList: "&serviceDir=api/index/getCanUseCouponList",
			mall_myDiscountsCoupons: "&serviceDir=api/index/myDiscountsCoupons",
			mall_applyForRefund: "&serviceDir=api/index/applyForRefund",
			mall_submitRefundReason: "&serviceDir=api/index/submitRefundReason",
			mall_refundInfo: "&serviceDir=api/index/refundInfo",
			mall_logisticsInfoChoice: "&serviceDir=api/accessory/logisticsInfoChoice",
			mall_toApplyForInvoice: "&serviceDir=api/index/toApplyForInvoice",
			mall_checkInvoice: "&serviceDir=api/index/checkInvoice",
			mall_getLogistics: "&serviceDir=api/Accessory/getLogistics",
			mall_defineReceipt: "&serviceDir=api/accessory/defineReceipt",
			mall_getBuyAgreement: "&serviceDir=api/accessory/getBuyAgreement",
			mall_storesDetails: "&serviceDir=api/index/storesDetails",
			mall_shopAllAppraisal: "&serviceDir=api/Evaluate/shopAllAppraisal",
			mall_allGoodsAppraisal: "&serviceDir=api/Evaluate/allGoodsAppraisal",
			mall_goEvaluate: "&serviceDir=api/Evaluate/goEvaluate",
			mall_goBackhanderEvaluate: "&serviceDir=api/Evaluate/goBackhanderEvaluate",
			mall_doAppraisal: "&serviceDir=api/Evaluate/doAppraisal",
			mall_doBackhanderEvaluate: "&serviceDir=api/Evaluate/doBackhanderEvaluate",
			mall_shoppingCart: "&serviceDir=api/accessory/shoppingCart",
			mall_addShoppingCart: "&serviceDir=api/Accessory/addShoppingCart",
			mall_delShoppingGoods: "&serviceDir=api/Accessory/delShoppingGoods",
			mall_alterShoppingMsg: "&serviceDir=api/Accessory/alterShoppingMsg",
			mall_getServiceHotline: "/weixin/mina/?service=MinaMall.getServiceHotline",
			mall_goodsListSearchByName: "/weixin/mina/?service=minaMall.goodsListSearchByName",
			mall_myAttachmentOrderDetail: "/weixin/mina/?service=MinaMall.myAttachmentOrderDetail",
			mall_addWxCard: "/weixin/mina/?service=MinaMall.addWxCard",
			mall_wxCouponSuccessful: "&serviceDir=api/coupon/wxCouponSuccessful",
			mall_userVoucherListNew: "&serviceDir=api/Coupon/userVoucherListNew",
			mall_getVoucherForOrder: "&serviceDir=api/Coupon/getVoucherForOrder",
			mall_getVoucherByCode: "/weixin/mina/?service=MinaMall.getVoucherByCode",
			mall_doFirstBeforeTransfer: "/weixin/mina/?service=MinaMall.doFirstBeforeTransfer",
			mall_getCarByVin: "&serviceDir=api/Coupon/getCarByVin",
			mall_doTransfer: "&serviceDir=api/Coupon/doTransfer",
			mall_myTransfer: "&serviceDir=api/Coupon/myTransfer",
			mall_plusGoodsDetails: "&serviceDir=api/plus/plusGoodsDetails",
			mall_getPlusCouponBySn: "&serviceDir=api/coupon/getPlusCouponBySn",
			mall_plusSubmitMsg: "&serviceDir=api/plus/plusSubmitMsg",
			mall_vipCardSubmit: "&serviceDir=api/Coupon/vipCardSubmit",
			mall_plusSelectShop: "&serviceDir=api/Coupon/plusSelectShop",
			mall_viewPlusCard: "&serviceDir=api/Coupon/viewPlusCard",
			mall_helpCardSubmit: "&serviceDir=api/coupon/helpCardSubmit",
			mall_invoiceGetauthurl: "&serviceDir=api/Accessory/invoiceGetauthurl",
			mall_sendMail: "&serviceDir=api/Accessory/sendMail",
			mall_goodsDetailsByMode: "&serviceDir=api/Bydcar/goodsDetailsByMode",
			mall_isECity: "&serviceDir=api/plus/isECity",
			mall_myExtOrdDetail: "&model=extend&serviceDir=ExtendService.myExtOrdDetail",
			mall_createExtWarrantyOrd: "&model=extend&serviceDir=ExtendService.createExtWarrantyOrd",
			mall_updateExtWarrantyDeal: "&model=extend&serviceDir=ExtendService.updateExtWarrantyDeal",
			mall_extensionDetail: "&serviceDir=api/extension/extensionDetail",
			mall_extensionList: "&serviceDir=api/extension/extensionList",
			mall_applyInvoice: "&serviceDir=api/extension/applyInvoice",
			mall_extCheckInvoice: "&serviceDir=api/extension/checkInvoice",
			mall_ifCanRefund: "&serviceDir=api/extension/ifCanRefund",
			mall_refundApply: "&serviceDir=api/extension/refundApply",
			mall_extRefundInfo: "&serviceDir=api/extension/refundInfo",
			mall_orderConfirm: "&serviceDir=api/extension/orderConfirm",
			forum_getForumList: "&model=discuz&serviceDir=Forum.getForumList",
			forum_getGlobalThreadList: "&model=discuz&serviceDir=Forum.getGlobalThreadList",
			forum_getGlobalDigestThreadList: "&model=discuz&serviceDir=Forum.getGlobalDigestThreadList",
			forum_getThreadList: "&model=discuz&serviceDir=Forum.getThreadList",
			forum_getUserThreadList: "&model=discuz&serviceDir=Forum.getUserThreadList",
			forum_getPostList: "&model=discuz&serviceDir=Forum.getPostList",
			forum_getUserPostList: "&model=discuz&serviceDir=Forum.getUserReplyList",
			forum_getStickList: "&model=discuz&serviceDir=Forum.getStickThreadList",
			forum_getUserInfo: "&model=discuz&serviceDir=Forum.getUserInfo",
			forum_getDzUserInfo: "&model=discuz&serviceDir=Forum.getDzUserInfo",
			forum_verifyModerator: "&model=discuz&serviceDir=Forum.verifyModerator",
			forum_getThreadInfo: "&model=discuz&serviceDir=Forum.getThreadInfo",
			forum_addviews: "&model=discuz&serviceDir=Forum.addviews",
			forum_postThread: "&model=discuz&serviceDir=Forum.postThread",
			forum_replyThread: "&model=discuz&serviceDir=Forum.replyThread",
			forum_verifyThreadPerm: "&model=discuz&serviceDir=Forum.verifyThreadPerm",
			forum_setThreadStick: "&model=discuz&serviceDir=Forum.setThreadStick",
			forum_setThreadStamp: "&model=discuz&serviceDir=Forum.setThreadStamp",
			forum_setThreadIcon: "&model=discuz&serviceDir=Forum.setThreadIcon",
			forum_setThreadClosed: "&model=discuz&serviceDir=Forum.setThreadClosed",
			forum_setThreadBump: "&model=discuz&serviceDir=Forum.setThreadBump",
			forum_setThreadHighlight: "&model=discuz&serviceDir=Forum.setThreadHighlight",
			forum_setThreadDigest: "&model=discuz&serviceDir=Forum.setThreadDigest",
			forum_setPostWarning: "&model=discuz&serviceDir=Forum.setPostWarning",
			forum_setPostBan: "&model=discuz&serviceDir=Forum.setPostBan",
			forum_delPost: "&model=discuz&serviceDir=Forum.delPost",
			forum_setEditMessage: "&model=discuz&serviceDir=Forum.setEditMessage",
			forum_getEditMessage: "&model=discuz&serviceDir=Forum.getEditMessage",
			forum_getSmileyList: "&model=discuz&serviceDir=Forum.getSmileyList",
			forum_setAttachmentUnused: "&model=discuz&serviceDir=Forum.setAttachmentUnused",
			forum_delAttachment: "&model=discuz&serviceDir=Forum.delAttachment",
			forum_setAttachment: "&model=discuz&serviceDir=Forum.setAttachment",
			forum_previewPost: "&model=discuz&serviceDir=Forum.previewPost",
			forum_rename: "&model=discuz&serviceDir=Forum.rename",
			forum_reavatar: "&model=discuz&serviceDir=Forum.reavatar",
			forum_getReadAccess: "&model=discuz&serviceDir=Forum.getReadAccess",
			CouponListByOpenid: "&serviceDir=api/coupon/CouponListByOpenid",
			couponDetails: "&serviceDir=api/coupon/couponDetails",
			getCouponStatus: "&serviceDir=api/coupon/getCouponStatus",
			sureToUse: "&serviceDir=api/coupon/sureToUse",
			showStoreForCoupon: "&serviceDir=api/coupon/showStoreForCoupon",
			query_query: "/query/?service=AntiFakeQuery.query",
			query_queryNew: "/query/?service=AntiFakeQuery.queryNew",
			query_getLuckDrawRule: "/query/?service=AntiFakeQuery.getLuckDrawRule",
			query_luckDraw: "/query/?service=AntiFakeQuery.luckDraw",
			query_savePersonalInfo: "/query/?service=AntiFakeQuery.savePersonalInfo",
			query_report: "/query/?service=AntiFakeQuery.report",
			pilePick: "&serviceDir=Powerlife.PowerlifeOnePointOne.pilePick",
			PileDetail: "&serviceDir=Powerlife.PowerlifeOnePointOne.PileDetail",
			Opslist: "&serviceDir=Powerlife.PowerlifeOnePointOne.Opslist",
			others_getProvinces: "&model=carowner&serviceDir=CityAndPro.findProvinces",
			others_getCitys: "&model=carowner&serviceDir=CityAndPro.findCitys",
			others_getBindStatus: "/weixin/mina/?service=mina.getBindStatus",
			others_getAuthStatus: "/weixin/mina/?service=mina.getAuthStatus",
			others_getAddress: "/weixin/mina/?service=mina.editAddress",
			others_removeAddress: "/weixin/mina/?service=mina.delAddress",
			others_getCarInfoByVin: "&model=carowner&serviceDir=AssociatedVehicleBusiness.findCarInfoByVin",
			others_getIccidByVin: "&model=carowner&serviceDir=AssociatedVehicleBusiness.GetIccidByVin",
			others_getCarSeriesByUid: "&model=carowner&serviceDir=CarOwnerAuthBusiness.queryCarSeriesByUid",
			others_sendSubscribeMessage: "/weixin/mina/?service=SubMsgStorage.setSubMsg",
			others_uploadAttachment: "/forward/?service=ForInformationFlow.fileUpload",
			others_getUrlById: "&serviceDir=card.getCardH5Url&model=mall",
			others_getWxaCodeUnlimit: "/weixin/mina/?service=mina.getWxaCodeUnlimit",
			service_getServiceStatus: "&model=transparentFactory&serviceDir=TransparentFactory2.getServiceStatus2",
			service_getUpkeepRecordList: "&model=upkeepRecord&serviceDir=UpkeepRecord.getUpkeepRecordList",
			getUserIntegral: "&serviceDir=api/public/index.php?service=Order.getUserIntegralNew",
			orderCreate: "&serviceDir=api/public/index.php?service=Order.orderCreate",
			orderCreateBycode: "&serviceDir=api/public/index.php?service=Order.orderCreateBycode",
			getIntegralRecord: "&serviceDir=api/public/index.php?service=Order.getIntegralRecord",
			getOrderDetail: "&serviceDir=api/public/index.php?service=Order.getOrderDetail",
			getgoods: "&serviceDir=api/public/index.php?service=Goods.getgoods",
			goodsDetail: "&serviceDir=api/public/index.php?service=Goods.goodsDetail",
			getOrderExpress: "&serviceDir=api/public/index.php?service=Order.getOrderExpress",
			receiptExpress: "&serviceDir=api/public/index.php?service=Order.receiptExpress",
			getCarouselFigure: "&serviceDir=api/public/index.php?service=Goods.getCarouselFigure",
			integralIncrease: "&serviceDir=api/public/index.php?service=Order.integralIncrease",
			integralSign: "&serviceDir=api/public/index.php?service=Order.integralSign",
			getAddressMsg: "&serviceDir=api/address/getAddressMsg",
			setAddressMsg: "&serviceDir=api/address/setAddressMsg",
			getCityMsg: "&serviceDir=api/address/getCityMsg",
			changeDefaultAddress: "&serviceDir=api/address/changeDefaultAddress",
			deleteAddress: "&serviceDir=api/address/deleteAddress",
			OrderSetUserMsg: "&serviceDir=api/public/index.php?service=Order.setUserMsg",
			birthdayGetIntergral: "&model=carowner&serviceDir=CarOwnerBirthday.birthdayGetIntergral",
			cdKeyChange: "&serviceDir=api/public/index.php?service=Order.cdKeyChange",
			getCaptcha: "&serviceDir=api/public/index.php?service=Order.getCaptcha",
			getUserConcern: "&serviceDir=api/public/index.php?service=Order.getUserConcern",
			getOrderListById: "&serviceDir=api/public/index.php?service=Order.getOrderListById",
			getIntegralByCar: "&serviceDir=api/public/index.php?service=Order.getIntegralByCar",
			checkExchangecode: "&serviceDir=api/public/index.php?service=Goods.checkExchangecode",
			getBindDeviceList: "&serviceDir=App.MiniApi.getBindDeviceList",
			getAppStoreList: "&serviceDir=App.MiniApi.getAppStoreList",
			getBindUserinfo: "&serviceDir=App.MiniApi.iotGetBindUserinfo",
			unbindDevice: "&serviceDir=App.MiniApi.iotUnbindOpenid",
			createQrcode: "&serviceDir=App.MiniApi.iotCreateQrcode",
			sendInfo: "&serviceDir=App.MiniApi.iotCallback",
			community_getRecommendList: "&s=App.Community.recommendList",
			community_getPostList: "&s=App.Community.PostList",
			community_addFollow: "&s=App.User.addFollow",
			community_delFollow: "&s=App.User.delFollow",
			community_addPraises: "&s=App.Community.praises",
			community_delPraises: "&s=App.Community.cancelPraises",
			community_getPostDetail: "&s=App.Community.postDetail",
			community_post: "&s=App.Community.posting",
			community_reply: "&s=App.Community.CommentPost",
			community_getReplyList: "&s=App.Community.ReplyList",
			community_getCommentList: "&s=App.Community.commentList",
			community_getUserInfo: "&s=App.User.userCenter",
			community_delPost: "&s=App.Community.delPost",
			community_addPostViews: "&s=App.Community.addPostViews",
			community_changeUserInfo: "&s=App.User.changeUserInfo",
			community_followList: "&s=App.User.followList",
			community_fansList: "&s=App.User.fansList",
			community_getForumList: "&s=App.Community.forumList",
			community_postPraisesHeadimg: "&s=App.Community.postPraisesHeadimg",
			community_getHotMyNewsList: "&s=App.Community.getHotMyNewsList",
			community_getHotMyNewsCount: "&s=App.Community.getHotMyNewsCount",
			community_getHistoryNewsList: "&s=App.Community.getHistoryNewsList",
			community_getHotPraisesCount: "&s=App.Community.getHotPraisesCount",
			community_getHotPraisesList: "&s=App.Community.getHotPraisesList",
			community_getHistoryPraisesList: "&s=App.Community.getHistoryPraisesList",
			community_getRecommendBannerList: "&s=App.Community.getRecommendBannerList",
			community_getDiLinkBannerList: "&s=App.Community.getDiLinkBannerList"
		}; 
		module.exports = {
			myRequest: function(i, r) {
				var s = i.url,
				o = i.data,
				a = void 0 === o ? {}: o,
				t = i.success,
				n = i.fail,
				c = i.complete;
				e.getSession(function(i) {
					a.session_id = i,
					wx.request({
						url: s,
						data: a,
						header: e.getHeader(),
						method: "POST",
						success: function(e) {
							99999 == e.data.ret ? (wx.hideToast(), wx.hideLoading(), wx.showModal({
								title: "提示",
								content: "服务器繁忙，请稍后再试",
								showCancel: !1,
								confirmColor: "#1ca8e7"
							})) : "function" == typeof t && t(e, i)
						},
						fail: function(e) {
							"function" == typeof n && n(e)
						},
						complete: function(e) {
							"function" == typeof c && c(e)
						}
					})
				},
				r)
			},
			myRequestNoSId: function(i) {
				var r = i.url,
				s = i.data,
				o = void 0 === s ? {}: s,
				a = i.success,
				t = i.fail,
				n = i.complete;
				o.session_id = o.session_id || "",
				wx.request({
					url: r,
					data: o,
					header: e.getHeader(),
					method: "POST",
					success: function(e) {
						99999 == e.data.ret ? (wx.hideToast(), wx.hideLoading(), wx.showModal({
							title: "提示",
							content: "服务器繁忙，请稍后再试",
							showCancel: !1,
							confirmColor: "#1ca8e7"
						})) : "function" == typeof a && a(e, o.session_id)
					},
					fail: function(e) {
						"function" == typeof t && t(e)
					},
					complete: function(e) {
						"function" == typeof n && n(e)
					}
				})
			},
			API: i
		};
});