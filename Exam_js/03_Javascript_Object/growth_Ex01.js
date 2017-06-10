(function($) {
    'use strict';
    SF.C.eecColl.kakaoMessage.candidateDetail = candidateDetail;
    function candidateDetail($msgData) {
        var etcCheck = $msgData.data('etccheck');
        var plusUrl = $msgData.data('plus');
        var pledge = $msgData.data('pledge');
        var pledgeyn = $msgData.data('pledgeyn');
        var query = $msgData.data('query');
        var url = SF.C.eecColl.kakaoMessage.getDefaultUrl().replace(/q\=[^&]+&/, 'q=' + query + ' 후보&');
        var plusView = $msgData.data('plusview');
        var regStatus = $msgData.data('regstatus');
        var status = '';
        if(regStatus == 3){
            status = '(사퇴)';
        }else if(regStatus == 4){
            status = '(사망)';
        }else if(regStatus == 5){
            status = '(등록무효)';
        }
        var message = {
            "V" : "media",
            "I" : "",
            "W" : 0,
            "H" : 0,
            "R" : [
                {
                    "T" : $msgData.data('title')+status,
                    "D" : $msgData.data('description')+"\n"+$msgData.data('description2')+"\n"+$msgData.data('description3'),
                    "I" : $msgData.data('photo'),
                    "H" : 312,
                    "W" : 216,
                    "BDG": $msgData.data('candidate48Bdg2'),
                    "BDG_24": $msgData.data('candidate24Bdg2'),
                    "BDG_30": $msgData.data('candidate30Bdg2'),
                    "BDG_36": $msgData.data('candidate36Bdg2'),
                    "L" : url
                }
            ]
        };
        var hasBothPledgeAndPlusUrl = function() {
            if((etcCheck === 'y' && pledgeyn === 'Y') && plusView > 0){
                var BU = {
                    "BU": [
                        {
                            "L": pledge,
                            "T": "공약보기"
                        },
                        {
                            "L": plusUrl,
                            "T": "플러스친구"
                        }
                    ]
                };
                message.F = BU;
            }
        };
        var hasBothPledge = function() {
            if((etcCheck === 'y' && pledgeyn === 'Y') && plusView <= 0){
                var BU = {
                    "BU": [
                        {
                            "L": pledge,
                            "T": "공약보기"
                        }
                    ]
                };
                message.F = BU;
            }
        };
        var hasBothPlusUrl = function() {
            if((etcCheck === 'n' || pledgeyn === 'N') && plusView > 0){
                var BU = {
                    "BU": [
                        {
                            "L": plusUrl,
                            "T": "플러스친구"
                        }
                    ]
                };
                message.F = BU;
            }
        };
        hasBothPledgeAndPlusUrl();
        hasBothPledge();
        hasBothPlusUrl();
        SF.updateKakaoApi({ message: message });
    }
})(jQuery);
