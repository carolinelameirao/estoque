import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Fornecedor } from '../model/fornecedor.model';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-modal-provider-details.component',
  templateUrl: './modal-provider-details.component.component.html',
  styleUrls: ['./modal-provider-details.component.component.scss'],
})
export class ModalProviderDetailsComponentComponent implements OnInit {
  @Input() fornecedor!: Fornecedor;

  constructor(
    private modalCtrl: ModalController,
    private service: FornecedorService,
    private router: Router
  ) { }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  ngOnInit() {}

  edit(id: number) {
    this.router.navigate(['/tabs/editar', id]);
    this.modalCtrl.dismiss(null, 'cancel');
  }

  delete(id: number) {
    this.service.deleteFornecedor(id).subscribe({
      next: () => {
        this.modalCtrl.dismiss(null, 'cancel');
      },
      error: () => {
        console.error(console.error);
      },
    });
  }
}
