import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalProviderDetailsComponentComponent } from '../modal-provider-details.component/modal-provider-details.component.component';
import { Fornecedor } from '../model/fornecedor.model';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  fornecedores!: Fornecedor[];

  constructor(
    private service: FornecedorService,
    private modalCtrl: ModalController
  ) {}

  public ionViewWillEnter(): void {
    this.listaFornecedores();
  }

  listaFornecedores() {
    this.service.getFornecedores().subscribe({
      next: (result) => (this.fornecedores = result),
      error: (err) => console.error(err),
    });
  }

  async openModal(id:number) {
    const fornecedor = this.fornecedores.find(fornecedor => fornecedor.id === id);

    const modal = await this.modalCtrl.create({
      component: ModalProviderDetailsComponentComponent,
      componentProps: {
        'fornecedor': fornecedor
      }
    });

    modal.onWillDismiss().then(
      event => {
        if(event.role === 'cancel') {
          this.listaFornecedores();
        }
      }
    );

    return await modal.present();
  }
}
