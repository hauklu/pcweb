const imgUrl = `${process.env.STATIC_URL}/act/taurus/img`
// const imgUrl2 = 'http://10.0.0.98:8080/img/taurusMay'

var img = {
  home: {
    main_bg: `${imgUrl}/main_bg.jpg`, // 主背景
    rule_act: `${imgUrl}/rule_act.png`, // 活动规则图标
    cloud_01: `${imgUrl}/cloud_01.png`, // 主页左边云朵
    cloud_02: `${imgUrl}/cloud_02.png`, // 主页右边云朵
    rule_get: `${imgUrl}/rule_get.png`, // 领取规则图标
    no_reward: `${imgUrl}/no_reward.png`, // 可领记录无数据
    no_reward_exchange: `${imgUrl}/no_reward_exchange.png`, // 兑换记录无数据
    myreward_item_bg: `${imgUrl}/myreward_item_bg.png`, // 我的奖励单个组件背景
    qrcode_bottom_bg: `${imgUrl}/qrcode_bottom_bg.png`, // 二维码组件背景
    act_nav: `${imgUrl}/may_act_nav.png`, // 悬浮活动导航
    icon_kf: `${imgUrl}/kf.png` // 首页客服图标
  },
  login: {
    login_bg: `${imgUrl}/login_bg.png` // 登录主背景
  },
  result: {
    result_bg: `${imgUrl}/result_bg.png`, // 结果主背景
    get_ent_succ_title: `${imgUrl}/get_ent_succ_title.png`, // 领取实物成功标题
    get_tel_succ_title: `${imgUrl}/get_tel_succ_title.png`, // 领取手机卡成功标题
    show_reward_desc_title: `${imgUrl}/show_reward_desc_title.png`, // 查看奖励详情标题
    result_desc_bg01: `${imgUrl}/result_desc_bg01.png` // 奖励详情背景01
  },
  // 24214 => '绝版神器屠龙刀200g(黄金)', 24215 => '珍藏版沙巴克城主印50g(黄金)', 24216 => '限量比奇钱庄金币10g(黄金)', 24217 => '500京东卡', 24218 => '200京东卡', 24219 => '100话费卡', 24220 => '50话费卡'
  get_desc: {
    // 绝版神器屠龙刀200g(黄金)
    goods_24214: `${imgUrl}/get_desc_24214.png`,
    // 珍藏版沙巴克城主印50g(黄金)
    goods_24215: `${imgUrl}/get_desc_24215.png`,
    // 限量比奇钱庄金币10g(黄金)
    goods_24216: `${imgUrl}/get_desc_24216.png`,
    // 500京东卡
    goods_24217: `${imgUrl}/get_desc_24217.png`,
    // 200京东卡
    goods_24218: `${imgUrl}/get_desc_24218.png`,
    // 100话费卡
    goods_24219: `${imgUrl}/get_desc_24219.png`,
    // 50话费卡
    goods_24220: `${imgUrl}/get_desc_24220.png`
  }
}

module.exports = {
  img
}
