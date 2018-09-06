var xiwu = {
    addDays: function (date, days) {
        var that = this;
        var yyyy = date.getFullYear();
        var MM = date.getMonth();
        var dd = date.getDate() + parseInt(days);
        var hh = date.getHours();
        var mm = date.getMinutes();
        return new Date(yyyy, MM, dd, hh, mm, 0);
    },
    cacl: function () {
        for (var i = 0; i < $('.xiwu-title-inputs').length; i++) {
            if (!$('.xiwu-title-inputs').eq(i).val() || $('.xiwu-title-inputs').eq(i).val() == '') {
                alert('请输入完整的时间！');
                break;
            }
        }

        if (i >= $('.xiwu-title-inputs').length) {
            var _now = new Date();
            var startDate = new Date(_now.getFullYear(), _now.getMonth(), _now.getDate(), $('.xiwu-title-inputs').eq(0).val(), $('.xiwu-title-inputs').eq(1).val(), $('.xiwu-title-inputs').eq(2).val());
            var lastDate = new Date(_now.getFullYear(), _now.getMonth(), _now.getDate(), $('.xiwu-title-inputs').eq(3).val(), $('.xiwu-title-inputs').eq(4).val(), $('.xiwu-title-inputs').eq(5).val());
            if (startDate.getTime() - lastDate.getTime() > 0) {
                lastDate = new Date(_now.getFullYear(), _now.getMonth, _now.getDate() + 1, $('.xiwu-title-inputs').eq(3).val(), $('.xiwu-title-inputs').eq(4).val(), $('.xiwu-title-inputs').eq(5).val());
            }

            var lastTime = $('#xiwu_attr1').prop('checked') ? lastDate.getTime() - startDate.getTime() + 60 * 60 * 1000 : lastDate.getTime() - startDate.getTime() + 30 * 60 * 1000;
            lastTime = 3 * 60 * 60 * 1000 - lastTime;

            var hh = parseInt(lastTime / 1000 / 60 /60);
            var mm = parseInt(lastTime / 1000 / 60) % 60;
            var ss = lastTime / 1000 % 60;
            $('.JS-xiwu-result').html(hh + ':' + mm + ':' + ss + ' +2s')
        }
    }
}