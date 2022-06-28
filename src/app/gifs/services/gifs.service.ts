import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial : string[] = [];

  //public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarGifs( query: string = '' ) {

    this._historial.unshift(query)
    console.log(this._historial)
    query = query.trim().toLocaleLowerCase();
    
    if( !this._historial.includes( query ) ) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      //localStorage.setItem('historial', JSON.stringify( this._historial )  );
    }

    /*const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query );

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, { params } )
      .subscribe( ( resp ) => {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify( this.resultados )  );
      });*/

  }

}
