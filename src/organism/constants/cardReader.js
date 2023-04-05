import _ from 'lodash'
export const cardReader = {
    getId: _.property('id'),
    getDiscount: _.property('discount'),
    getImgSrc: _.property('img_src'),
    getAlt: _.property('img_alt'),
    getTime: _.property('source_time'),
    getWeight: _.property('weight'),
    getName: _.property('name'),
    getCount: _.property('count'),
    getOldPrice: _.property('oldPrice'),
    getNewPrice:_.property('newPrice')
}