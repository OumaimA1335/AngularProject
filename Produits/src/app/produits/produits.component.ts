import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
@Component({
  selector : 'app-produits',
  templateUrl:'./produits.component.html'
})

export class ProduitsComponent implements OnInit {
produits : Produit[]; //un tableau de Produit
constructor(private produitService: ProduitService ) {
this.produits = produitService.listeProduits();
}
  ngOnInit(): void {
    
  }
  supprimerProduit(p: Produit)
  {
  //console.log(p);
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitService.supprimerProduit(p);

  this.produitService.supprimerProduit(p);
  }
  
}
