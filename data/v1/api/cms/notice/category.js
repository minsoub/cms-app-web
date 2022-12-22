module.exports = (req, res, next) => {
    return {
        'status' : 200,
        'code' : 'common.success.00001',
        'message':'성공',
        'data': {
            'category_list': [
                '전체',
                '안내',
                '신규서비스',
                '점검',
                '업데이트',
                '투자유의',
                '거래지원종료',
                '입출금',
                '이벤트',
                '마켓추가'
            ]
        }
    }
}