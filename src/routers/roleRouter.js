var router = require('express').Router();

router.get('/', function(req, res, next) {
    var testRoles = [{
            id: 1,
            name: '111111',
            actions: [
                { name: 'Create New Voucher', pattern: 'api/voucher/*', verbs: ['POST', 'PUT'] },
                { name: 'Read All Voucher', pattern: 'api/voucher/*', verbs: ['GET'] },
                { name: 'Update Voucher', pattern: 'api/voucher/*', verbs: ['POST', 'PUT'] },
                { name: 'Delete Voucher', pattern: 'api/voucher/*', verbs: ['POST', 'PUT'] }
            ]
        }, {
            id: 2,
            name: '222',
            actions: [
                { name: 'Create New organization', pattern: 'api/organization/*', verbs: ['POST', 'PUT'] },
                { name: 'Read All organization', pattern: 'api/organization/*', verbs: ['GET'] },
                { name: 'Update organization', pattern: 'api/organization/*', verbs: ['POST', 'PUT'] },
                { name: 'Delete organization', pattern: 'api/organization/*', verbs: ['POST', 'PUT'] }
            ]
        },
        { id: 3, name: '3333' },
        { id: 4, name: '4444' },
        { id: 5, name: '55555' },
        { id: 6, name: '66666' },
        { id: 7, name: '7777' },
        { id: 8, name: '8888' },
        { id: 9, name: '99999' }
    ];
    res.send({ data: testRoles });
})


router.post('/', function(req, res, next) {
    console.log(req.body);
    var newRole = {
        id: 15,
        name: 'newRole',
        actions: [
            { name: 'Create New report', pattern: 'api/report/*', verbs: ['POST', 'PUT'] },
            { name: 'Read All report', pattern: 'api/report/*', verbs: ['GET'] },
            { name: 'Update report', pattern: 'api/report/*', verbs: ['POST', 'PUT'] },
            { name: 'Delete report', pattern: 'api/report/*', verbs: ['POST', 'PUT'] }
        ]
    };
    res.send({ data: newRole });
})




module.exports = router;
