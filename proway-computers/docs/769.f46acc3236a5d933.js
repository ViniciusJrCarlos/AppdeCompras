"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[769],{1769:(M,u,i)=>{i.r(u),i.d(u,{ProdutosModule:()=>C});var p=i(6895),s=i(9541),o=i(1571);const g=[{id:1,descricao:"CD Metallica Novo",preco:250,descricaoPreco:"\xe0 vista no pixx",imagem:"./assets/images/metallica.jpg",quantidadeEstoque:15},{id:2,descricao:"CD Korn Novo",preco:150,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/korn.jpg",quantidadeEstoque:10},{id:3,descricao:"CD A7X Novo",preco:350,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/a7x.jpg",quantidadeEstoque:10},{id:4,descricao:"CD ArchEnemy Novo",preco:250,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/arch.jpg",quantidadeEstoque:10},{id:5,descricao:"CD Slipknot Novo",preco:250,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/slipknot.jpg",quantidadeEstoque:10},{id:6,descricao:"CD Paramore Novo",preco:250,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/paramore.jpg",quantidadeEstoque:10},{id:7,descricao:"CD Sorrow",preco:150,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/sorrow.jpg",quantidadeEstoque:10},{id:8,descricao:"CD Blessthefall",preco:100,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/bless.jpg",quantidadeEstoque:10},{id:9,descricao:"CD The Prodigy Raro",preco:550,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/prodigy.jpg",quantidadeEstoque:10},{id:10,descricao:"CD DJ MARKY",preco:1e3,descricaoPreco:"\xe0 vista no pix",imagem:"./assets/images/djmarky.jpg",quantidadeEstoque:10}];let l=(()=>{class t{constructor(){this.produtos=g}getAll(){return this.produtos}getOne(e){return this.produtos.find(r=>r.id=e)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=i(8881);let h=(()=>{class t{constructor(e){this.snackBar=e}notificar(e){this.snackBar.open(e,"OK",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(m.ux))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var _=i(5087),c=i(433);let f=(()=>{class t{constructor(e,r,a,d){this.produtosService=e,this.route=r,this.notificacaoService=a,this.carrinhoService=d,this.quantidade=1}ngOnInit(){const r=Number(this.route.snapshot.paramMap.get("id"));this.produto=this.produtosService.getOne(r)}adicionarAoCarrinho(){this.notificacaoService.notificar("O Produto foi adicionado ao carrinho...");const e={...this.produto,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(e)}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l),o.Y36(s.gz),o.Y36(h),o.Y36(_.e))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-detalhes-produto"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],[3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"class","product__avaiability"],[3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10," Estoque disponivel: "),o.qZA(),o.TgZ(11,"label"),o._uU(12," Quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(d){return r.quantidade=d}),o.qZA(),o._uU(14," Unidade (s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return r.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho "),o.qZA()()()),2&e&&(o.xp6(2),o.Q6J("src",null==r.produto?null:r.produto.imagem,o.LSH),o.xp6(3),o.hij(" ",null==r.produto?null:r.produto.descricao," "),o.xp6(2),o.hij(" ",o.xi3(8,5,null==r.produto?null:r.produto.preco,"BRL")," "),o.xp6(6),o.Q6J("ngModel",r.quantidade),o.xp6(3),o.hij(" ",null==r.produto?null:r.produto.quantidadeEstoque," unidade(s) em estoque "))},dependencies:[c.Fj,c.wV,c.JJ,c.qQ,c.On,p.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0}.product-description__container[_ngcontent-%COMP%]{border:1px solid var(--light-gray);border-radius:8px;padding:15px;flex:1}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]}),t})();function v(t,n){if(1&t&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11,"Comprar"),o.qZA()()()),2&t){const e=n.$implicit;o.xp6(1),o.MGl("routerLink","/produtos/",e.id,""),o.xp6(1),o.Q6J("src",e.imagem,o.LSH),o.xp6(2),o.hij(" ",e.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,e.preco,"BRL")," "),o.xp6(3),o.hij(" ",e.descricaoPreco," ")}}const P=[{path:"",component:(()=>{class t{constructor(e,r){this.produtosService=e,this.route=r}ngOnInit(){const e=this.produtosService.getAll();this.route.queryParamMap.subscribe(r=>{const a=r.get("descricao")?.toLowerCase();this.produtos=a?e.filter(d=>d.descricao.toLocaleLowerCase().includes(a)):e})}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(l),o.Y36(s.gz))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-produtos"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(e,r){1&e&&(o.TgZ(0,"section",0),o.YNc(1,v,12,8,"div",1),o.qZA()),2&e&&(o.xp6(1),o.Q6J("ngForOf",r.produtos))},dependencies:[p.sg,s.rH,p.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#fff;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:var(--blue)}.product-item__price[_ngcontent-%COMP%]{color:var(--orange);font-size:32px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]}),t})()},{path:":id",component:f}];let x=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[s.Bz.forChild(P),s.Bz]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.ez,x,c.u5]}),t})()}}]);