import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../model/medicamento';
import { ToastController } from '@ionic/angular';
import { MedicamentoService } from 'src/app/TatianaCardenas/servicios/medicamento.service';
@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.page.html',
  styleUrls: ['./crear-medicamento.page.scss'],
})
export class CrearMedicamentoPage implements OnInit {


  medicamento: Medicamento = new Medicamento();
  constructor(
    private medicamentoService: MedicamentoService,
    private toastController: ToastController) { }

  ngOnInit() {
  }
  guardar(){
    this.medicamentoService.sendMedicamento(this.medicamento).subscribe(data =>{
      console.log(data);
      if(data.code = '1')
        this.toast("GUardado satisfactorio");
    });
  }

  async toast(text: string, duration: number = 2000, position?) {
    const toast = await this.toastController.create({
      message: text,
      position: position || "middle",
      duration: duration
    });
    await toast.present();
  }


}
