import { async, TestBed } from '@angular/core/testing';
import { SignInComponent } from './sign-in.component';
describe('SignInComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SignInComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/var/www/html/angularfourDemo/public/src/app/sign-in/sign-in.component.spec.js.map