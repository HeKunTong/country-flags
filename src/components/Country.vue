<template>
    <div class="country-list">
        <div v-for="(item, index) in data" :key="index" class="country-row" @click="changeCode(item)">
            <div :class="['country-flag', item.key]"></div>
            <div class="country-name">{{ item.enCountryName }}</div>
            <div class="country-code">+{{ item.code }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .country-list {
        margin: 30px 0 0;

        .country-row {
            display: flex;
            align-items: center;
            padding: 12px 0;

            .country-flag {
                width: 30px;
                height: 30px;
                margin: 0 20px 0 0;
                background-size: cover;

                &.ad {
                    background-image: url('~@/assets/images/country/ad.svg');
                }

                &.ae {
                    background-image: url('~@/assets/images/country/ae.svg');
                }

                &.af {
                    background-image: url('~@/assets/images/country/af.svg');
                }

                &.ag {
                    background-image: url('~@/assets/images/country/ag.svg');
                }

                &.ai {
                    background-image: url('~@/assets/images/country/ai.svg');
                }

                &.al {
                    background-image: url('~@/assets/images/country/al.svg');
                }

                &.am {
                    background-image: url('~@/assets/images/country/am.svg');
                }

                &.ao {
                    background-image: url('~@/assets/images/country/ao.svg');
                }

                &.aq {
                    background-image: url('~@/assets/images/country/aq.svg');
                }

                &.ar {
                    background-image: url('~@/assets/images/country/ar.svg');
                }

                &.as {
                    background-image: url('~@/assets/images/country/as.svg');
                }

                &.at {
                    background-image: url('~@/assets/images/country/at.svg');
                }

                &.au {
                    background-image: url('~@/assets/images/country/au.svg');
                }

                &.aw {
                    background-image: url('~@/assets/images/country/aw.svg');
                }

                &.ax {
                    background-image: url('~@/assets/images/country/ax.svg');
                }

                &.az {
                    background-image: url('~@/assets/images/country/az.svg');
                }

                &.ba {
                    background-image: url('~@/assets/images/country/ba.svg');
                }

                &.bb {
                    background-image: url('~@/assets/images/country/bb.svg');
                }

                &.bd {
                    background-image: url('~@/assets/images/country/bd.svg');
                }

                &.be {
                    background-image: url('~@/assets/images/country/be.svg');
                }

                &.bf {
                    background-image: url('~@/assets/images/country/bf.svg');
                }

                &.bg {
                    background-image: url('~@/assets/images/country/bg.svg');
                }

                &.bh {
                    background-image: url('~@/assets/images/country/bh.svg');
                }

                &.bi {
                    background-image: url('~@/assets/images/country/bi.svg');
                }

                &.bj {
                    background-image: url('~@/assets/images/country/bj.svg');
                }

                &.bl {
                    background-image: url('~@/assets/images/country/bl.svg');
                }

                &.bm {
                    background-image: url('~@/assets/images/country/bm.svg');
                }

                &.bn {
                    background-image: url('~@/assets/images/country/bn.svg');
                }

                &.bo {
                    background-image: url('~@/assets/images/country/bo.svg');
                }

                &.bq {
                    background-image: url('~@/assets/images/country/bq.svg');
                }

                &.br {
                    background-image: url('~@/assets/images/country/br.svg');
                }

                &.bs {
                    background-image: url('~@/assets/images/country/bs.svg');
                }

                &.bt {
                    background-image: url('~@/assets/images/country/bt.svg');
                }

                &.bv {
                    background-image: url('~@/assets/images/country/bv.svg');
                }

                &.bw {
                    background-image: url('~@/assets/images/country/bw.svg');
                }

                &.by {
                    background-image: url('~@/assets/images/country/by.svg');
                }

                &.bz {
                    background-image: url('~@/assets/images/country/bz.svg');
                }

                &.ca {
                    background-image: url('~@/assets/images/country/ca.svg');
                }

                &.cc {
                    background-image: url('~@/assets/images/country/cc.svg');
                }

                &.cd {
                    background-image: url('~@/assets/images/country/cd.svg');
                }

                &.cf {
                    background-image: url('~@/assets/images/country/cf.svg');
                }

                &.cg {
                    background-image: url('~@/assets/images/country/cg.svg');
                }

                &.ch {
                    background-image: url('~@/assets/images/country/ch.svg');
                }

                &.ci {
                    background-image: url('~@/assets/images/country/ci.svg');
                }

                &.ck {
                    background-image: url('~@/assets/images/country/ck.svg');
                }

                &.cl {
                    background-image: url('~@/assets/images/country/cl.svg');
                }

                &.cm {
                    background-image: url('~@/assets/images/country/cm.svg');
                }

                &.cn {
                    background-image: url('~@/assets/images/country/cn.svg');
                }

                &.co {
                    background-image: url('~@/assets/images/country/co.svg');
                }

                &.cr {
                    background-image: url('~@/assets/images/country/cr.svg');
                }

                &.cu {
                    background-image: url('~@/assets/images/country/cu.svg');
                }

                &.cv {
                    background-image: url('~@/assets/images/country/cv.svg');
                }

                &.cw {
                    background-image: url('~@/assets/images/country/cw.svg');
                }

                &.cx {
                    background-image: url('~@/assets/images/country/cx.svg');
                }

                &.cy {
                    background-image: url('~@/assets/images/country/cy.svg');
                }

                &.cz {
                    background-image: url('~@/assets/images/country/cz.svg');
                }

                &.de {
                    background-image: url('~@/assets/images/country/de.svg');
                }

                &.dj {
                    background-image: url('~@/assets/images/country/dj.svg');
                }

                &.dk {
                    background-image: url('~@/assets/images/country/dk.svg');
                }

                &.dm {
                    background-image: url('~@/assets/images/country/dm.svg');
                }

                &.do {
                    background-image: url('~@/assets/images/country/do.svg');
                }

                &.dz {
                    background-image: url('~@/assets/images/country/dz.svg');
                }

                &.ec {
                    background-image: url('~@/assets/images/country/ec.svg');
                }

                &.ee {
                    background-image: url('~@/assets/images/country/ee.svg');
                }

                &.eg {
                    background-image: url('~@/assets/images/country/eg.svg');
                }

                &.eh {
                    background-image: url('~@/assets/images/country/eh.svg');
                }

                &.er {
                    background-image: url('~@/assets/images/country/er.svg');
                }

                &.es {
                    background-image: url('~@/assets/images/country/es.svg');
                }

                &.et {
                    background-image: url('~@/assets/images/country/et.svg');
                }

                &.fi {
                    background-image: url('~@/assets/images/country/fi.svg');
                }

                &.fj {
                    background-image: url('~@/assets/images/country/fj.svg');
                }

                &.fk {
                    background-image: url('~@/assets/images/country/fk.svg');
                }

                &.fm {
                    background-image: url('~@/assets/images/country/fm.svg');
                }

                &.fo {
                    background-image: url('~@/assets/images/country/fo.svg');
                }

                &.fr {
                    background-image: url('~@/assets/images/country/fr.svg');
                }

                &.ga {
                    background-image: url('~@/assets/images/country/ga.svg');
                }

                &.gb {
                    background-image: url('~@/assets/images/country/gb.svg');
                }

                &.gd {
                    background-image: url('~@/assets/images/country/gd.svg');
                }

                &.ge {
                    background-image: url('~@/assets/images/country/ge.svg');
                }

                &.gf {
                    background-image: url('~@/assets/images/country/gf.svg');
                }

                &.gg {
                    background-image: url('~@/assets/images/country/gg.svg');
                }

                &.gh {
                    background-image: url('~@/assets/images/country/gh.svg');
                }

                &.gi {
                    background-image: url('~@/assets/images/country/gi.svg');
                }

                &.gl {
                    background-image: url('~@/assets/images/country/gl.svg');
                }

                &.gm {
                    background-image: url('~@/assets/images/country/gm.svg');
                }

                &.gn {
                    background-image: url('~@/assets/images/country/gn.svg');
                }

                &.gp {
                    background-image: url('~@/assets/images/country/gp.svg');
                }

                &.gq {
                    background-image: url('~@/assets/images/country/gq.svg');
                }

                &.gr {
                    background-image: url('~@/assets/images/country/gr.svg');
                }

                &.gs {
                    background-image: url('~@/assets/images/country/gs.svg');
                }

                &.gt {
                    background-image: url('~@/assets/images/country/gt.svg');
                }

                &.gu {
                    background-image: url('~@/assets/images/country/gu.svg');
                }

                &.gw {
                    background-image: url('~@/assets/images/country/gw.svg');
                }

                &.gy {
                    background-image: url('~@/assets/images/country/gy.svg');
                }

                &.hk {
                    background-image: url('~@/assets/images/country/hk.svg');
                }

                &.hm {
                    background-image: url('~@/assets/images/country/hm.svg');
                }

                &.hn {
                    background-image: url('~@/assets/images/country/hn.svg');
                }

                &.hr {
                    background-image: url('~@/assets/images/country/hr.svg');
                }

                &.ht {
                    background-image: url('~@/assets/images/country/ht.svg');
                }

                &.hu {
                    background-image: url('~@/assets/images/country/hu.svg');
                }

                &.id {
                    background-image: url('~@/assets/images/country/id.svg');
                }

                &.ie {
                    background-image: url('~@/assets/images/country/ie.svg');
                }

                &.il {
                    background-image: url('~@/assets/images/country/il.svg');
                }

                &.im {
                    background-image: url('~@/assets/images/country/im.svg');
                }

                &.in {
                    background-image: url('~@/assets/images/country/in.svg');
                }

                &.io {
                    background-image: url('~@/assets/images/country/io.svg');
                }

                &.iq {
                    background-image: url('~@/assets/images/country/iq.svg');
                }

                &.ir {
                    background-image: url('~@/assets/images/country/ir.svg');
                }

                &.is {
                    background-image: url('~@/assets/images/country/is.svg');
                }

                &.it {
                    background-image: url('~@/assets/images/country/it.svg');
                }

                &.je {
                    background-image: url('~@/assets/images/country/je.svg');
                }

                &.jm {
                    background-image: url('~@/assets/images/country/jm.svg');
                }

                &.jo {
                    background-image: url('~@/assets/images/country/jo.svg');
                }

                &.jp {
                    background-image: url('~@/assets/images/country/jp.svg');
                }

                &.ke {
                    background-image: url('~@/assets/images/country/ke.svg');
                }

                &.kg {
                    background-image: url('~@/assets/images/country/kg.svg');
                }

                &.kh {
                    background-image: url('~@/assets/images/country/kh.svg');
                }

                &.ki {
                    background-image: url('~@/assets/images/country/ki.svg');
                }

                &.km {
                    background-image: url('~@/assets/images/country/km.svg');
                }

                &.kn {
                    background-image: url('~@/assets/images/country/kn.svg');
                }

                &.kp {
                    background-image: url('~@/assets/images/country/kp.svg');
                }

                &.kr {
                    background-image: url('~@/assets/images/country/kr.svg');
                }

                &.kw {
                    background-image: url('~@/assets/images/country/kw.svg');
                }

                &.ky {
                    background-image: url('~@/assets/images/country/ky.svg');
                }

                &.kz {
                    background-image: url('~@/assets/images/country/kz.svg');
                }

                &.la {
                    background-image: url('~@/assets/images/country/la.svg');
                }

                &.lb {
                    background-image: url('~@/assets/images/country/lb.svg');
                }

                &.lc {
                    background-image: url('~@/assets/images/country/lc.svg');
                }

                &.li {
                    background-image: url('~@/assets/images/country/li.svg');
                }

                &.lk {
                    background-image: url('~@/assets/images/country/lk.svg');
                }

                &.lr {
                    background-image: url('~@/assets/images/country/lr.svg');
                }

                &.ls {
                    background-image: url('~@/assets/images/country/ls.svg');
                }

                &.lt {
                    background-image: url('~@/assets/images/country/lt.svg');
                }

                &.lu {
                    background-image: url('~@/assets/images/country/lu.svg');
                }

                &.lv {
                    background-image: url('~@/assets/images/country/lv.svg');
                }

                &.ly {
                    background-image: url('~@/assets/images/country/ly.svg');
                }

                &.ma {
                    background-image: url('~@/assets/images/country/ma.svg');
                }

                &.mc {
                    background-image: url('~@/assets/images/country/mc.svg');
                }

                &.md {
                    background-image: url('~@/assets/images/country/md.svg');
                }

                &.me {
                    background-image: url('~@/assets/images/country/me.svg');
                }

                &.mf {
                    background-image: url('~@/assets/images/country/mf.svg');
                }

                &.mg {
                    background-image: url('~@/assets/images/country/mg.svg');
                }

                &.mh {
                    background-image: url('~@/assets/images/country/mh.svg');
                }

                &.mk {
                    background-image: url('~@/assets/images/country/mk.svg');
                }

                &.ml {
                    background-image: url('~@/assets/images/country/ml.svg');
                }

                &.mm {
                    background-image: url('~@/assets/images/country/mm.svg');
                }

                &.mn {
                    background-image: url('~@/assets/images/country/mn.svg');
                }

                &.mo {
                    background-image: url('~@/assets/images/country/mo.svg');
                }

                &.mp {
                    background-image: url('~@/assets/images/country/mp.svg');
                }

                &.mq {
                    background-image: url('~@/assets/images/country/mq.svg');
                }

                &.mr {
                    background-image: url('~@/assets/images/country/mr.svg');
                }

                &.ms {
                    background-image: url('~@/assets/images/country/ms.svg');
                }

                &.mt {
                    background-image: url('~@/assets/images/country/mt.svg');
                }

                &.mu {
                    background-image: url('~@/assets/images/country/mu.svg');
                }

                &.mv {
                    background-image: url('~@/assets/images/country/mv.svg');
                }

                &.mw {
                    background-image: url('~@/assets/images/country/mw.svg');
                }

                &.mx {
                    background-image: url('~@/assets/images/country/mx.svg');
                }

                &.my {
                    background-image: url('~@/assets/images/country/my.svg');
                }

                &.mz {
                    background-image: url('~@/assets/images/country/mz.svg');
                }

                &.na {
                    background-image: url('~@/assets/images/country/na.svg');
                }

                &.nc {
                    background-image: url('~@/assets/images/country/nc.svg');
                }

                &.ne {
                    background-image: url('~@/assets/images/country/ne.svg');
                }

                &.nf {
                    background-image: url('~@/assets/images/country/nf.svg');
                }

                &.ng {
                    background-image: url('~@/assets/images/country/ng.svg');
                }

                &.ni {
                    background-image: url('~@/assets/images/country/ni.svg');
                }

                &.nl {
                    background-image: url('~@/assets/images/country/nl.svg');
                }

                &.no {
                    background-image: url('~@/assets/images/country/no.svg');
                }

                &.np {
                    background-image: url('~@/assets/images/country/np.svg');
                }

                &.nr {
                    background-image: url('~@/assets/images/country/nr.svg');
                }

                &.nu {
                    background-image: url('~@/assets/images/country/nu.svg');
                }

                &.nz {
                    background-image: url('~@/assets/images/country/nz.svg');
                }

                &.om {
                    background-image: url('~@/assets/images/country/om.svg');
                }

                &.pa {
                    background-image: url('~@/assets/images/country/pa.svg');
                }

                &.pe {
                    background-image: url('~@/assets/images/country/pe.svg');
                }

                &.pf {
                    background-image: url('~@/assets/images/country/pf.svg');
                }

                &.pg {
                    background-image: url('~@/assets/images/country/pg.svg');
                }

                &.ph {
                    background-image: url('~@/assets/images/country/ph.svg');
                }

                &.pk {
                    background-image: url('~@/assets/images/country/pk.svg');
                }

                &.pl {
                    background-image: url('~@/assets/images/country/pl.svg');
                }

                &.pm {
                    background-image: url('~@/assets/images/country/pm.svg');
                }

                &.pn {
                    background-image: url('~@/assets/images/country/pn.svg');
                }

                &.pr {
                    background-image: url('~@/assets/images/country/pr.svg');
                }

                &.ps {
                    background-image: url('~@/assets/images/country/ps.svg');
                }

                &.pt {
                    background-image: url('~@/assets/images/country/pt.svg');
                }

                &.pw {
                    background-image: url('~@/assets/images/country/pw.svg');
                }

                &.py {
                    background-image: url('~@/assets/images/country/py.svg');
                }

                &.qa {
                    background-image: url('~@/assets/images/country/qa.svg');
                }

                &.re {
                    background-image: url('~@/assets/images/country/re.svg');
                }

                &.ro {
                    background-image: url('~@/assets/images/country/ro.svg');
                }

                &.rs {
                    background-image: url('~@/assets/images/country/rs.svg');
                }

                &.ru {
                    background-image: url('~@/assets/images/country/ru.svg');
                }

                &.rw {
                    background-image: url('~@/assets/images/country/rw.svg');
                }

                &.sa {
                    background-image: url('~@/assets/images/country/sa.svg');
                }

                &.sb {
                    background-image: url('~@/assets/images/country/sb.svg');
                }

                &.sc {
                    background-image: url('~@/assets/images/country/sc.svg');
                }

                &.sd {
                    background-image: url('~@/assets/images/country/sd.svg');
                }

                &.se {
                    background-image: url('~@/assets/images/country/se.svg');
                }

                &.sg {
                    background-image: url('~@/assets/images/country/sg.svg');
                }

                &.sh {
                    background-image: url('~@/assets/images/country/sh.svg');
                }

                &.si {
                    background-image: url('~@/assets/images/country/si.svg');
                }

                &.sj {
                    background-image: url('~@/assets/images/country/sj.svg');
                }

                &.sk {
                    background-image: url('~@/assets/images/country/sk.svg');
                }

                &.sl {
                    background-image: url('~@/assets/images/country/sl.svg');
                }

                &.sm {
                    background-image: url('~@/assets/images/country/sm.svg');
                }

                &.sn {
                    background-image: url('~@/assets/images/country/sn.svg');
                }

                &.so {
                    background-image: url('~@/assets/images/country/so.svg');
                }

                &.sr {
                    background-image: url('~@/assets/images/country/sr.svg');
                }

                &.ss {
                    background-image: url('~@/assets/images/country/ss.svg');
                }

                &.st {
                    background-image: url('~@/assets/images/country/st.svg');
                }

                &.sv {
                    background-image: url('~@/assets/images/country/sv.svg');
                }

                &.sx {
                    background-image: url('~@/assets/images/country/sx.svg');
                }

                &.sy {
                    background-image: url('~@/assets/images/country/sy.svg');
                }

                &.sz {
                    background-image: url('~@/assets/images/country/sz.svg');
                }

                &.tc {
                    background-image: url('~@/assets/images/country/tc.svg');
                }

                &.td {
                    background-image: url('~@/assets/images/country/td.svg');
                }

                &.tf {
                    background-image: url('~@/assets/images/country/tf.svg');
                }

                &.tg {
                    background-image: url('~@/assets/images/country/tg.svg');
                }

                &.th {
                    background-image: url('~@/assets/images/country/th.svg');
                }

                &.tj {
                    background-image: url('~@/assets/images/country/tj.svg');
                }

                &.tk {
                    background-image: url('~@/assets/images/country/tk.svg');
                }

                &.tl {
                    background-image: url('~@/assets/images/country/tl.svg');
                }

                &.tm {
                    background-image: url('~@/assets/images/country/tm.svg');
                }

                &.tn {
                    background-image: url('~@/assets/images/country/tn.svg');
                }

                &.to {
                    background-image: url('~@/assets/images/country/to.svg');
                }

                &.tr {
                    background-image: url('~@/assets/images/country/tr.svg');
                }

                &.tt {
                    background-image: url('~@/assets/images/country/tt.svg');
                }

                &.tv {
                    background-image: url('~@/assets/images/country/tv.svg');
                }

                &.tw {
                    background-image: url('~@/assets/images/country/tw.svg');
                }

                &.tz {
                    background-image: url('~@/assets/images/country/tz.svg');
                }

                &.ua {
                    background-image: url('~@/assets/images/country/ua.svg');
                }

                &.ug {
                    background-image: url('~@/assets/images/country/ug.svg');
                }

                &.um {
                    background-image: url('~@/assets/images/country/um.svg');
                }

                &.us {
                    background-image: url('~@/assets/images/country/us.svg');
                }

                &.uy {
                    background-image: url('~@/assets/images/country/uy.svg');
                }

                &.uz {
                    background-image: url('~@/assets/images/country/uz.svg');
                }

                &.va {
                    background-image: url('~@/assets/images/country/va.svg');
                }

                &.vc {
                    background-image: url('~@/assets/images/country/vc.svg');
                }

                &.ve {
                    background-image: url('~@/assets/images/country/ve.svg');
                }

                &.vg {
                    background-image: url('~@/assets/images/country/vg.svg');
                }

                &.vi {
                    background-image: url('~@/assets/images/country/vi.svg');
                }

                &.vn {
                    background-image: url('~@/assets/images/country/vn.svg');
                }

                &.vu {
                    background-image: url('~@/assets/images/country/vu.svg');
                }

                &.wf {
                    background-image: url('~@/assets/images/country/wf.svg');
                }

                &.ws {
                    background-image: url('~@/assets/images/country/ws.svg');
                }

                /*&.xk {*/
                /*	background-image: url('~@/assets/images/country/xk.svg');*/
                /*}*/

                &.ye {
                    background-image: url('~@/assets/images/country/ye.svg');
                }

                &.yt {
                    background-image: url('~@/assets/images/country/yt.svg');
                }

                &.za {
                    background-image: url('~@/assets/images/country/za.svg');
                }

                &.zm {
                    background-image: url('~@/assets/images/country/zm.svg');
                }

                &.zw {
                    background-image: url('~@/assets/images/country/zw.svg');
                }
            }

            .country-name {
                font-weight: 400;
                font-size: 14px;
                color: #1B3232;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin: 0 30px 0 0;
                flex: 1;
            }

            .country-code {
                width: 50px;
                text-align: right;
                font-weight: 400;
                font-size: 14px;
                color: #1B3232;
            }
        }
    }
</style>

<script>
    import { COUNTRY_AREAS } from '@/configs';

    export default {
        data() {
            return {
                data: COUNTRY_AREAS
            };
        },
        methods: {
            goBack: function() {
                this.$emit('back');
            },
            changeCode: function(country) {
                this.$emit('changeCode', '+' + country.code);
            },
        },
    }
</script>

