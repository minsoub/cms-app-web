module.exports = (req, res, next) => {
    return {
        'status' : 200,
        'code' : 'common.success.00001',
        'message':'성공',
        'data': {
            'id' : '1',
            'title' : '[입출금] 공지사항',
            'category_names':[
                '입출금'
            ],
            'content':'',
            'file_id':'',
            'file_name':'파일.pdf',
            'share_name':'[입출금] 공지사항',
            'share_description':'공유',
            'share_file_url':'',
            'share_button_name':'공유하기',
            'create_date':'2022-11-08 15:30:09',
            'screen_date':'2022-11-08 15:30:09',
            'isUpdate': true
        },
        'total_page': 10,
        'total': 100,
        'limit': 10,
        'offset':0
    }
}