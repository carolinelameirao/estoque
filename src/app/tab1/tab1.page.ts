import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fornecedor } from '../model/fornecedor.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  fornecedorForm!: FormGroup;
  fornecedor!: Fornecedor;
  editable: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedorService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.fornecedorForm = this.formBuilder.group({
      razaoSocial: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      cnpj: ["", [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      telefone: ["", [Validators.required, Validators.minLength(14), Validators.maxLength(15)]],
      email: ["", [Validators.required, Validators.email]],
      logradouro: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      numero: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(5), Validators.pattern(/^[0-9]+$/)]],
      bairro: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      cidade: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      estado: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    });

    this.route.paramMap.subscribe(params => {
      const fornecedorId = +params.get('id')!;

      if(fornecedorId)  {
        this.fornecedorService.findFornecedor(fornecedorId).subscribe({
          next: (fornecedorDB: Fornecedor) => {
            this.fornecedor = fornecedorDB;
            this.editable = true;
            this.loadForm();
          },
          error: (err) => console.log(err)
        });
      }
    });
  }

  addFornecedor() {
    const newFornecedor = this.fornecedorForm.getRawValue() as Fornecedor;

    this.fornecedorService.insertFornecedor(newFornecedor)
      .subscribe({
        next: (result:any) => {
          this.fornecedorForm.reset();
          this.router.navigateByUrl('/tabs/tab3');
        },
        error: (error:any) => {console.log(error)}
      });
  }

  loadForm() {
    this.fornecedorForm.patchValue({
      razaoSocial: this.fornecedor.razaoSocial,
      cnpj: this.fornecedor.cnpj,
      telefone: this.fornecedor.telefone,
      email: this.fornecedor.email,
      logradouro: this.fornecedor.logradouro,
      numero: this.fornecedor.numero,
      bairro: this.fornecedor.bairro,
      cidade: this.fornecedor.cidade,
      estado: this.fornecedor.estado,
      cep: this.fornecedor.cep
    });
  }

  editar() {
    const fornecedorId = this.fornecedor.id;
  }
}
