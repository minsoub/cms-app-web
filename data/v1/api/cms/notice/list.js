module.exports = (req, res, next) => {
    const {
        category
    } = req.query;

    if (category === '안내') {
        return {
            'status': 200,
            'code': 'common.success.00001',
            'message':'성공',
            'data': {
                'search_category':'',
                'search_text':'',
                'fix':[
                    {
                        'id': '1',
                        'title':'[안내] fix 공지사항 1 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '2',
                        'title':'[안내] fix 공지사항 2 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '3',
                        'title':'[안내] fix 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ],
                'list': [
                    {
                        'id': 'a1',
                        'title':'[안내] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a2',
                        'title':'[안내] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a3',
                        'title':'[안내] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a4',
                        'title':'[안내] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ]
            },
            'total_page': 10,
            'total': 100,
            'limit': 10,
            'offset':0
        }
    } else if (category === '입출금') {
        return {
            'status': 200,
            'code': 'common.success.00001',
            'message':'성공',
            'data': {
                'search_category':'',
                'search_text':'',
                'fix':[
                    {
                        'id': '1',
                        'title':'[입출금] fix 공지사항 1 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '2',
                        'title':'[입출금] fix 공지사항 2 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '3',
                        'title':'[입출금] fix 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ],
                'list': [
                    {
                        'id': 'a1',
                        'title':'[입출금] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a2',
                        'title':'[입출금] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a3',
                        'title':'[입출금] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a4',
                        'title':'[입출금] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ]
            },
            'total_page': 10,
            'total': 100,
            'limit': 10,
            'offset':0
        }
    } else if (category === '신규서비스') {
        return {
            'status': 200,
            'code': 'common.success.00001',
            'message':'성공',
            'data': {
                'search_category':'',
                'search_text':'',
                'fix':[
                    {
                        'id': '1',
                        'title':'[신규서비스] fix 공지사항 1 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '2',
                        'title':'[신규서비스] fix 공지사항 2 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '3',
                        'title':'[신규서비스] fix 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ],
                'list': [
                    {
                        'id': 'a1',
                        'title':'[신규서비스] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a2',
                        'title':'[신규서비스] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a3',
                        'title':'[신규서비스] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a4',
                        'title':'[신규서비스] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ]
            },
            'total_page': 10,
            'total': 100,
            'limit': 10,
            'offset':0
        }
    } else {
        return {
            'status': 200,
            'code': 'common.success.00001',
            'message':'성공',
            'data': {
                'search_category':'',
                'search_text':'',
                'fix':[
                    {
                        'id': '1',
                        'title':'[전체] fix 공지사항 1 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '2',
                        'title':'[전체] fix 공지사항 2 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': '3',
                        'title':'[전체] fix 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ],
                'list': [
                    {
                        'id': 'a1',
                        'title':'[전체] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a2',
                        'title':'[전체] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a3',
                        'title':'[전체] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    },
                    {
                        'id': 'a4',
                        'title':'[전체] normal 공지사항 3 입니다.',
                        'category_names': [
                            ''
                        ],
                        'create_date':'2022-11-11',
                        'screen_date':'2022-11-11',
                    }
                ]
            },
            'total_page': 10,
            'total': 100,
            'limit': 10,
            'offset':0
        }
    }
}